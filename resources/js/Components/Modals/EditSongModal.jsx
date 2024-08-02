import { useEffect, useRef, useState } from "react";
import Modal from "../Modal";
import PrimaryButton from "../PrimaryButton";
import InputLabel from "../InputLabel";
import { useForm } from "@inertiajs/react";
import TextInput from "../TextInput";

export default function NewSongModal({ show, onClose, song }) {
    const filenameLabelRef = useRef(null);
    const uploadInputRef = useRef(null);
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    const { data, setData, put, reset } = useForm({
        title: song?.title || '',
        length: song?.length || 0,
        _method: 'PUT',
    });

    const setCover = (file) => {
        console.log(file.name);
        setData("album_cover", file); 
        console.log(data.album_cover);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        if (file) {
            filenameLabelRef.current.textContent = file.name;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setCover(file);
            }
        }
        setCover(file);
    };

    useEffect(() => {
        if (song) {
            const { minutes, seconds } = convertMillisecondsToTime(song.length);
            setData({
                title: song.title,
                length: song?.length,
                song_minutes: minutes,
                song_seconds: seconds,
                album: song.album,
                album_cover: song.album_cover,
                artist: song.artist,
                status: song.status,
            });
            setMinutes(minutes);
            setSeconds(seconds);
            console.log(song.status);
        }
    }, [song]);

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (uploadInputRef.current) {
            uploadInputRef.current.click();
        }
    };

    const handleConvert = () => {
        const totalMilliseconds = (parseInt(minutes) || 0) * 60 * 1000 +
                                  (parseInt(seconds) || 0) * 1000;
        setData("length", totalMilliseconds);
    };

    function convertMillisecondsToTime(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
      
        return {
          minutes,
          seconds
        };
      }



    function stringToBool(str) {
        return str === 'true';
    }

    
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

    
        // Append all fields to FormData
        formData.append('title', data.title);
        formData.append('length', data.length);
        formData.append('album', data.album);
        formData.append('bpm', data.bpm);
        formData.append('key', data.key);
        formData.append('tuning', data.tuning);
        formData.append('cover', data.cover);
        formData.append('metronome', data.metronome);
        formData.append('status', data.status);
        console.log('Form Data:', Array.from(formData.entries())); // Log form data

        handleConvert();
        put(route('songs.update', song), data);
        console.log(data);
        onClose();
        reset();
    };

    return (
        <>
            <Modal show={show} onClose={onClose}>
                <form className="p-6 max-h-screen overflow-y-auto" onSubmit={onSubmit} encType="multipart/form-data">
                    <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-dark-black md:text-2xl lg:text-2xl text-center">Edit "{song?.title}"</h1>
                    <div className="grid grid-cols-2 gap-4 my-2">
                        <div className="flex flex-wrap items-center my-auto">
                            <div className="w-full">
                                <InputLabel htmlFor="title" className="text-nowrap text-xs text-dark-black mb-1 ms-1 mt-6" value="Song Name" />
                                <input id="title" type="text" value={data.title} name="title" isFocused={true} onChange={(e) => setData("title", e.target.value)} className="block py-2.5 px-0 w-full text-sm text-dark-black bg-transparent border-0 border-b border-dark-black/20 appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" />
                            </div>
                            <div className="w-full">
                                <InputLabel htmlFor="album" className="text-nowrap text-xs text-dark-black mb-1 ms-1 mt-6" value="Album Title" />
                                <input id="album" type="text" name="album" onChange={(e) => setData("album", e.target.value)} className="block py-2.5 px-0 w-full text-sm text-dark-black bg-transparent border-0 border-b border-dark-black/20 appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" />
                            </div>
                            <div className="w-full">
                                <InputLabel htmlFor="bpm" className="text-nowrap text-xs text-dark-black mb-1 ms-1 mt-6" value="BPM" />
                                <input id="bpm" type="number" name="bpm" value={data.bpm} onChange={(e) => setData("bpm", e.target.value)} className="block py-2.5 px-0 w-full text-sm text-dark-black bg-transparent border-0 border-b border-dark-black/20 appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" />
                            </div>
                            <div className="w-full">
                                <InputLabel htmlFor="artist" className="text-nowrap text-xs text-dark-black mb-1 ms-1 mt-6" value="Artist" />
                                <input id="artist" value={data.artist} type="text" name="artist" onChange={(e) => setData("artist", e.target.value)} className="block py-2.5 px-0 w-full text-sm text-dark-black bg-transparent border-0 border-b border-dark-black/20 appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" />
                            </div>
                            <div className="w-full">
                                <InputLabel htmlFor="album_track_number" className="text-nowrap text-xs text-dark-black mb-1 ms-1 mt-6" value="Track Number" />
                                <input id="album_track_number" type="number" name="album_track_number" onChange={(e) => setData("album_track_number", e.target.value)} className="block py-2.5 px-0 w-full text-sm text-dark-black bg-transparent border-0 border-b border-dark-black/20 appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" />
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center my-auto">
                        <div className="flex items-start gap-4 w-full">
                                <div className="flex flex-col w-1/2">
                                    <InputLabel value="Minutes" className="text-nowrap text-xs text-dark-black mb-1 ms-1 mt-6" />
                                    <input className="block py-2.5 px-0 w-full text-sm text-dark-black bg-transparent border-0 border-b border-dark-black/20 appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} min="0" />
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <InputLabel value="Seconds" className="text-nowrap text-xs text-dark-black mb-1 ms-1 mt-6" />
                                    <input className="block py-2.5 px-0 w-full text-sm text-dark-black bg-transparent border-0 border-b border-dark-black/20 appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" type="number" value={seconds} onChange={(e) => setSeconds(e.target.value)} min="0" max="59" />
                                </div>
                            </div>

                            <div className="w-full">
                                <InputLabel htmlFor="key" className="text-nowrap text-xs text-dark-black mb-1 ms-1 mt-6" value="Key" />
                                <input id="key" type="text" name="key" value={data.key} onChange={(e) => setData("key", e.target.value)} className="block py-2.5 px-0 w-full text-sm text-dark-black bg-transparent border-0 border-b border-dark-black/20 appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" />
                            </div>
                            <div className="w-full">
                                <InputLabel htmlFor="tuning" className="text-nowrap text-xs text-dark-black mb-1 ms-1 mt-6" value="Tuning" />
                                <input id="tuning" type="text" name="tuning" value={data.tuning} onChange={(e) => setData("tuning", e.target.value)} className="block py-2.5 px-0 w-full text-sm text-dark-black bg-transparent border-0 border-b border-dark-black/20 appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" />
                            </div>
                            <div className="flex flex-col w-full">
                                <InputLabel htmlFor="cover" className="text-nowrap text-xs text-dark-black mb-1 ms-1 mt-6" value="Cover" />
                                <select id="cover" name="cover" defaultValue="" onChange={(e) => setData("cover", stringToBool(e.target.value))} className="block py-2.5 px-0 w-full text-sm text-dark-black bg-transparent border-0 border-b border-dark-black/20 appearance-none focus:outline-none focus:ring-0 focus:border-teal peer">
                                    <option value="" disabled>Y/N</option>
                                    <option value='true'>Yes</option>
                                    <option value='false'>No</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-full">
                                <InputLabel htmlFor="metronome" className="text-nowrap text-xs text-dark-black mb-1 ms-1 mt-6" value="Metronome" />
                                <select id="metronome" name="metronome" defaultValue="" onChange={(e) => setData("metronome", stringToBool(e.target.value))} className="block py-2.5 px-0 w-full text-sm text-dark-black bg-transparent border-0 border-b border-dark-black/20 appearance-none focus:outline-none focus:ring-0 focus:border-teal peer">
                                    <option value="" disabled>Y/N</option>
                                    <option value='true'>Yes</option>
                                    <option value='false'>No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-8 w-full">
                        <InputLabel htmlFor="status" className="text-nowrap text-xs text-dark-black mb-1 ms-1 mt-6" value="Song Status" />
                        <select id="status" name="status" defaultValue="" onChange={(e) => setData("status", e.target.value)} className="block py-2.5 px-0 w-full text-sm text-dark-black bg-transparent border-0 border-b border-dark-black/20 appearance-none focus:outline-none focus:ring-0 focus:border-teal peer">
                            <option value="" disabled>SelectStatus</option>
                            <option value="staple">Staple</option>
                            <option value="most_often">Most Often</option>
                            <option value="rarities">Rarities</option>
                            <option value="other">Everything Else</option>
                        </select>
                    </div>
                    <div className="flex flex-col mt-8 w-full">
                        <button className="block py-2.5 px-4 w-full text-sm text-dark-black bg-gray-200 rounded-lg border border-dark-black/20 focus:outline-none focus:ring-0 focus:border-teal hover:bg-gray-300" onClick={handleClick}>Album Cover</button>
                        <input type="file" ref={uploadInputRef} onChange={(e) => handleFileChange(e)} style={{ display: "none" }} />
                        <label ref={filenameLabelRef} className="block py-2.5 px-4 w-full text-sm text-dark-black mt-2"></label>
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="w-full py-2.5 w-full bg-teal rounded-lg text-sm px-4 mt-0.2" onClick={handleConvert}>Submit</button>
                    </div>
                </form>
            </Modal>
        </>
    )
};
