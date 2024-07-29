import { useState } from "react";
import Modal from "../Modal";
import Checkbox from "../Checkbox";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "../PrimaryButton";
import formatTime from "@/Helpers/formatTime";


/**
 * Renders a search card component
 * TODO: Separate the modal into a separate component?
 * 
 * @component
 * @param {Object} item - The item object containing information about the card.
 * @returns {JSX.Element} The rendered search card component.
 */
export default function SearchCard({ item, auth }) {
    const imageUrl = item?.images?.[0]?.url || '';  // Default to an empty string if undefined
    const title = item?.name || 'Unknown';          // Default to 'Unknown' if name is undefined
    const [openingModal, setOpeningModal] = useState(false);
    const [openingArtistModal, setOpeningArtistModal] = useState(false);
    const [tracks, setTracks] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [trackModal, setOpenTrackModal] = useState(false);
    const [selectedTrack, setSelectedTrack] = useState(null);

    
    console.log(selectedTrack);
    
    const accessToken = localStorage.getItem('spotify_access_token');

    // Fetches the tracks of the album
    const fetchTracks = async () => {
        const response = await fetch(`https://api.spotify.com/v1/albums/${item.id}/tracks`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const data = await response.json();
        setTracks(data.items);
        
    };

    // Fetches the tracks of the album
    const fetchAlbumTracks = async (albumId) => {
        const response = await fetch(`https://api.spotify.com/v1/albums/${albumId}/tracks`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const data = await response.json();
        setTracks(data.items);
    };

    // Fetches the albums of the artist
    const fetchAlbums = async () => {
        const response = await fetch(`https://api.spotify.com/v1/artists/${item.id}/albums`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const data = await response.json();
        setAlbums(data.items);
    }


    // Opens the modal
    const openModal = () => {
        if (item.type === 'album') {
            setOpeningModal(true);
            fetchTracks();
        }
        else if (item.type === "artist") {
            setOpeningArtistModal(true);
            fetchAlbums();
        }
        else if (item.type=== 'track'){
            setSelectedTrack(item); // Set the selected track directly
            setOpenTrackModal(true);
        }
    }

    // Closes the modal
    const closeModal = () => {
        setOpeningModal(false);
    };
    const closeArtistModal = () => {
        setOpeningArtistModal(false);
    }
    const closeTrackModal = () => {
        setSelectedTrack(null);
        setOpenTrackModal(false);
    }

    // Handles the click of an album
    const handleAlbumClick = async (album) => {
        closeArtistModal();
        item.artist = album.artists[0].name;
        await fetchAlbumTracks(album.id);
        item.album_cover = album.images[0].url;
        item.name = album.name;
        
        setOpeningModal(true);
    }
    
    // Handles the form submission
    const { data, setData, post, errors, reset } = useForm({
        songs: []
    });

    // Changes the form
    const changeForm = (e, track) => {
        const { checked } = e.target;
        const updatedSongs = [...data.songs];

        // If the checkbox is checked, add the song to the list
        if (checked) {
            updatedSongs.push({
                title: track.name,
                length: track.duration_ms || track.length,
                album_track_number: track.track_number,
                album: item.name,
                album_cover: item.album_cover || item.images[0].url,
                artist: item.artist,
            });
        } else {
            const index = updatedSongs.findIndex(song => song.id === track.track_number);
            if (index > -1) {
                updatedSongs.splice(index, 1);
            }
        }
        setData('songs', updatedSongs);
    };
    
    // Submits the form
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Songs', data.songs);
    
        post(route('songs.store'));
    };

    // Renders the search card component
    return (
        <>
            <button onClick={openModal}>
                <div className="w-full mx-auto max-w-xs sm:max-w-sm rounded-3xl overflow-hidden flex flex-col shadow-lg shadow-white/10">
                {/* Render image */}
                    {imageUrl ? (
                        <img src={imageUrl} alt={title} className="w-full object-cover h-40 sm:h-48 md:h-64 lg:h-72" />
                        ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-600">
                            <img src={"https://fakeimg.pl/1920x1920?text=+No+Image&font=bebas"} alt="No Image Found." className="w-full object-cover h-40 sm:h-48 md:h-64 lg:h-72"/>
                        </div>
                        )}
                    {/* Render title */}
                        <div className="p-4 flex bg-dark-black flex-col flex-1">
                            <h3 className="text-lg text-center text-white font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap">
                                {title}
                            </h3>
                        </div>
                    </div>
            </button>

            {/* Modal for the tracks */}
            <Modal show={openingModal} onClose={closeModal}>
                <form className="p-6" onSubmit={onSubmit}>
                    <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-dark-black md:text-2xl lg:text-2xl text-center">{title}</h1>
                    <p className="text-md mb-8 text-dark-black text-center">Select tracks to add</p>
                    {tracks.map((track, index) => (
                        <div className="grid grid-cols-12 my-2" key={track.id}>
                            <Checkbox
                                className="mx-auto my-auto"
                                onChange={(e) => changeForm(e, track)}
                                value={track.name}
                            />
                            <div className="col-span-1 my-auto">
                                <p>{track.track_number}</p>
                            </div>
                            <div className="col-span-9 me-4">
                                <span>{track.name}</span>
                            </div>
                            <div className="col-span-1 my-auto">
                                <span>{formatTime(track.duration_ms)}</span>
                            </div>
                        </div>
                    ))}
                    <PrimaryButton className="mt-4">Add to Library</PrimaryButton>
                </form>
            </Modal>

            {/* Modal for the albums */}
            <Modal show={openingArtistModal} onClose={closeArtistModal}>
            <form className="p-6" onSubmit={onSubmit}>
                    <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-dark-black md:text-2xl lg:text-2xl text-center">{title}</h1>
                    <p className="text-md mb-8 text-dark-black text-center">Select Album</p>
                    {albums.map((album, index) => (
                        <>
                            <div key={album.id}  onClick={() => handleAlbumClick(album)} className="cursor-pointer">
                            <p className="flex justify-between mt-2 mb-2"key={index}>{album.name} <span>{album.release_date}</span></p>
                            <hr />
                            </div>
                        </>
                    ))}
                </form>
            </Modal>

            <Modal show={trackModal} onClose={closeTrackModal}>
                <form className="p-6" onSubmit={onSubmit}>
                    <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-dark-black md:text-2xl lg:text-2xl text-center">{title}</h1>
                    <p className="text-md mb-8 text-dark-black text-center">Select tracks to add</p>
                        <div className="grid grid-cols-12 my-2" key={item.id}>
                            <Checkbox
                                className="mx-auto my-auto"
                                onChange={(e) => changeForm(e, item)}
                                value={item.name}
                            />
                            <div className="col-span-1 my-auto">
                                <p>{item.track_number}</p>
                            </div>
                            <div className="col-span-9 me-4">
                                <span>{item.name}</span>
                            </div>
                            <div className="col-span-1 my-auto">
                                <span>{formatTime(item.length)}</span>
                            </div>
                        </div>
                    <PrimaryButton className="mt-4">Add to Library</PrimaryButton>
                </form>
            </Modal>
        </>
    );
};
