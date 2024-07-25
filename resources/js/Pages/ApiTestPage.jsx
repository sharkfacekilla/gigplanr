import Table from "@/Components/Table/TableV1/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useEffect, useRef, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import AlbumCard from "@/Components/AlbumCards/AlbumCard";
import AppleLookinSearchBar from "@/Components/AppleLookinSearchBar";
import SearchCard from "@/Components/SearchCards/SearchCard";

export default function ApiTestPage({ auth }) {
    const [results, setResults] = useState({
        artists: [],
        albums: []
    });
    const [query, setQuery] = useState('');
    const [initialQuery, setInitialQuery] = useState('');
    const [visibleItems, setVisibleItems] = useState(8);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const hash = window.location.hash;
        let token = localStorage.getItem('spotify_access_token');

        if (!token && hash) {
            const parsedHash = hash.substring(1).split('&').reduce((initial, item) => {
                if (item) {
                    const parts = item.split('=');
                    initial[parts[0]] = decodeURIComponent(parts[1]);
                }
                return initial;
            }, {});

            window.location.hash = '';
            token = parsedHash.access_token;

            if (token) {
                localStorage.setItem('spotify_access_token', token);
                setAuthenticated(true);
            }
        } else if (token) {
            setAuthenticated(true);
        }
    }, []);


    /**
     * Handle's the search form submission. Connects to the Spotify API and fetches artists and albums based on the query.
     * TODO: Implement tracks for this maybe?
     * TODO: Make a way to search either Spotify or Apple Music (?) or both
     * @param {event} e the event object
     */
    const handleSearch = async (e) => {
        e.preventDefault();

        if (!authenticated) {
            const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
            const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
            const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=user-library-read`;
            window.location.href = authUrl;
            return;
        }
        setLoading(true);
        setSearch(true);

        // const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
        const accessToken = localStorage.getItem('spotify_access_token');
        const artists = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=artist&limit=5`;
        const albums = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=album&limit=15`;
        const artistsResponse = await fetch(artists, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const artistsData = await artistsResponse.json();

        const albumsResponse = await fetch(albums, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const albumsData = await albumsResponse.json();

        setResults({
            artists: artistsData.artists?.items || [],
            albums: albumsData.albums?.items || []
        });

        setInitialQuery(query);
        setVisibleItems(8);
        setSearchText(query);
        setLoading(false);
    };

    // Function to load more items.
    const loadMoreItems = () => {
        setVisibleItems((prev) => prev + 8);
        containerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Function to prioritize query items
    const prioritizeResults = (items, query) => {
        return items.sort((a, b) => {
            if (a.name.toLowerCase().includes(query.toLowerCase()) && !b.name.toLowerCase().includes(query.toLowerCase())) {
                return -1;
            }
            if (!a.name.toLowerCase().includes(query.toLowerCase()) && b.name.toLowerCase().includes(query.toLowerCase())) {
                return 1;
            }
            return 0;
        });
    };

    // Combine and prioritize results
    const combinedResults = [
        ...results.artists.map(item => ({
            id: item.id,
            name: item.name,
            images: item.images,
            type: 'artist'
        })),
        ...results.albums.map(item => ({
            id: item.id,
            name: item.name,
            images: item.images,
            type: 'album'
        }))
    ];

    // Prioritize results
    const prioritizedResults = prioritizeResults(combinedResults, initialQuery);

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="API Test Page" />
                <h1 className="text-2xl text-white">API Test Page</h1>
                <p className="text-white">Welcome {auth.user.name}!</p>
                <div className="overflow-x-scroll md:overflow-hidden">
                {authenticated ? (
                        <form onSubmit={handleSearch}>
                            <div className="relative mx-auto max-w-[600px]">
                                <AppleLookinSearchBar
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onSubmit={handleSearch}
                                    placeholder="Search for an artist or album"
                                />
                            </div>
                        </form>
                    ) : (
                        <div className="text-center text-white">
                            <p>You need to authenticate with Spotify to search.</p>
                            <button
                                onClick={() => {
                                    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
                                    const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
                                    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=user-library-read`;
                                    window.location.href = authUrl;
                                }}
                                className="px-4 py-2 text-white bg-dark-black rounded-md"
                            >
                                Authenticate with Spotify
                            </button>
                        </div>
                    )}
                    <div className="flex items-center justify-center mt-12">
                        {search && 
                            <div>
                                <h2 className="text-3xl text-white">Search Results for <span className="text-teal">{searchText}</span></h2>
                                <p className="mt-12 text-sm text-center text-white">Don't see what you're looking for? <span className="text-teal">Add it here</span></p>
                            </div>
                        }
                    </div>
                    <div className="mt-12 mb-24 flex items-center">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl w-3/4 md:w-full mx-auto">
                    {prioritizedResults.slice(0, visibleItems).map((item) => (
                                <SearchCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                    {visibleItems < prioritizedResults.length && (
                        <div className="flex justify-center mt-12" ref={containerRef}>
                            <button
                                type="button"
                                onClick={loadMoreItems}
                                className="px-4 py-2 text-white bg-dark-black rounded-md mb-32"
                            >
                                {loading ? 'Loading...' : 'Show More...'}
                            </button>
                        </div>
                    )}
                    {search && (
                        <p className="mt-12 mb-32 text-md text-center text-white">Don't see what you're looking for? <span className="text-dark-black border border-white rounded-lg ms-2 px-2.5 py-2.5 bg-white">Add it here</span></p>
                    )}
                </div>
            </AuthenticatedLayout>
        </>
    );
};
