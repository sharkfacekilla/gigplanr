import Table from "@/Components/Table/TableV1/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useEffect, useRef, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import AlbumCard from "@/Components/AlbumCards/AlbumCard";
import AppleLookinSearchBar from "@/Components/AppleLookinSearchBar";
import SearchCard from "@/Components/SearchCards/SearchCard";

export default function ApiTestPage({ auth }) {
    const [albums, setAlbums] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [albumArt, setAlbumArt] = useState('');

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [visibleItems, setVisibleItems] = useState(9);
    const [loading, setLoading] = useState(false);
    const containerRef = useRef(null);
    const [search, setSearch] = useState(false);
    const [searchText, setSearchText] = useState('');

    async function testApi() {

        // let artistId = "4MzJMcHQBl9SIYSjwWn8QW"

        // // Fetch albums
        // const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
        //     headers: {
        //         Authorization: `Bearer ${accessToken}`
        //     }
        // });
        
        // const data = await response.json();
        // setAlbums(data.items);

        // const albumLength = data.items.length;
        // console.log(albums);
        // console.log(albumLength);

        // const albumId = data.items[0].id;
        // const albumImages = data.items[0].images;

        // // Set album art URL
        // if (albumImages.length > 1) {
        //     setAlbumArt(albumImages[1].url);
        // }

        // // Fetch tracks
        // const response2 = await fetch(`https://api.spotify.com/v1/albums/${albumId}/tracks`, {
        //     headers: {
        //         Authorization: `Bearer ${accessToken}`
        //     }
        // });
        // const tracksData = await response2.json();
        // setTracks(tracksData.items);

        // console.log(tracksData);
    }

    const handleSearch = async (e) => {
        e.preventDefault();

        
        setLoading(true);
        setSearch(true);
        
        
        const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
        const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track,artist,album&limit=50`;
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const data = await response.json();
        setResults(data.tracks.items);
        setVisibleItems(9);
        setSearchText(query);
        setLoading(false);
    };

    const loadMoreItems = (e) => {
        setVisibleItems((prev) => prev + 9);
        containerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };


    useEffect(() => {
        if (results.length > 0) {
            console.log(results);
        }
    }, [results]);

    const formatTime = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000); // Convert milliseconds to total seconds
        const minutes = Math.floor(totalSeconds / 60);       // Calculate minutes
        const remainingSeconds = totalSeconds % 60;           // Calculate remaining seconds
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="API Test Page" />
                <h1 className="text-2xl text-white">API Test Page</h1>
                <p className="text-white">Welcome {auth.user.name}!</p>
                <div className="overflow-x-scroll  md:overflow-hidden">
                    <form onSubmit={handleSearch} >
                        <div className="relative mx-auto max-w-[600px]">
                            <AppleLookinSearchBar
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onSubmit={handleSearch}
                            placeholder="Search for a track"
                            />
                        </div>
                    </form>
                        <div className="flex items-center justify-center mt-12">
                            {search ?  <h2 className="text-3xl text-white">Search Results for <span className="text-teal">{searchText}</span></h2>
 : ""}
                        </div>
                    <div className="mt-12 flex items-center">
                        <div className="grid grid-cols-3 gap-4 max-w-6xl w-full mx-auto">
                            {results.slice(0, visibleItems).map((track) => (
                                <SearchCard key={track.id} track={track} />
                            ))}
                        </div>
                    </div>
                    {visibleItems < results.length && (
                        <div className="flex justify-center mt-12" ref={containerRef}>
                            <button
                                type="button"
                                onClick={loadMoreItems}
                                className="px-4 py-2 text-white bg-teal rounded-md mb-32"
                            >
                                {loading ? 'Loading...' : 'Show More...'}
                            </button>
                        </div>
                    )}
                </div>
            </AuthenticatedLayout>
        </>
    );
};
