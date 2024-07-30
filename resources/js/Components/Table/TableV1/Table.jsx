import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import TableHeading from "@/Components/TableHeading";
import TextInput from "@/Components/TextInput";
import formatTime from "@/Helpers/formatTime";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import EditSongModal from '@/Components/Modals/EditSongModal';

export default function Table({ songs }) {

    // const [editModal, setEditModal] = useState(false);
    const [song, setSong] = useState(null);
    const [editSongModal, setEditSongModal] = useState(false);

    // const [minutes, setMinutes] = useState('');
    // const [seconds, setSeconds] = useState('');
    
    // const handleConvert = () => {
    //   const totalMilliseconds = (parseInt(minutes) || 0) * 60 * 1000 +
    //                             (parseInt(seconds) || 0) * 1000;
    //   console.log(totalMilliseconds);
    //   setData("duration", totalMilliseconds);
    // };

    // function stringToBool(str) {
    //     return str === 'true';
    // }

    // function convertMillisecondsToTime(ms) {
    //     const totalSeconds = Math.floor(ms / 1000);
    //     const minutes = Math.floor(totalSeconds / 60);
    //     const seconds = totalSeconds % 60;
      
    //     return {
    //       minutes,
    //       seconds
    //     };
    //   }

    // const { data, setData, patch, errors } = useForm({
    //     title: songs?.data.title || '',
    //     album: songs?.data.album || '',
    //     length: song?.length || 0,
    //     bpm: song?.bpm || 0,
    //     key: song?.key || '',
    //     tuning: song?.tuning || '', 
    //     cover: song?.cover|| 0,
    //     metronome: song?.metronome || 0,
    //     _method: "PATCH",
    // });
    
    // const handleClick = (song) => {
    //     setSong(song);
    //     const { minutes, seconds } = convertMillisecondsToTime(song?.length);

    //     setData({
    //         title: song.title,
    //         album: song.album,
    //         length: song?.length,
    //         song_minutes: minutes,
    //         song_seconds: seconds,
    //         bpm: song.bpm,
    //         key: song.key,
    //         tuning: song.tuning,
    //         cover: song.cover,
    //         metronome: song.metronome,
    //     });
    //     setMinutes(minutes);
    //     setSeconds(seconds);

    //     openModal();
    // }
    
    // const openModal = () => {
    //     setEditModal(true);
    // }
    
    // const closeModal = () => {
    //     setEditModal(false);
    //     setSong(null);
    // };
    
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     handleConvert();

    //     console.log(data);
    //     patch(route('songs.update', song.id), data);
    //     closeModal();
    // };

    const openModal = () => {
        setEditSongModal(true);
    }

    const closeModal = () => {
        setEditSongModal(false);
    };

    console.log(song);
    
    
    return (
        <>
            <div className="overflow-x-scroll md:overflow-hidden">
                <table className="min-w-full text-sm text-left rtl:text-right text-black dark:text-white">
                    <thead className="text-xs text-white bg-dark-black dark:text-white border-b-2 border-white">
                        <tr className="text-nowrap">
                            <th name="name">Album Cover</th>
                            <TableHeading name="start_date">Song Name</TableHeading>
                            <TableHeading name="start_date">Album Title</TableHeading>
                            <TableHeading name="start_date">Artist</TableHeading>
                            <TableHeading name="start_date">Time</TableHeading>
                            <TableHeading name="start_date">BPM</TableHeading>
                            <TableHeading name="start_date">Key</TableHeading>
                            <TableHeading name="start_date">Tuning</TableHeading>
                            <TableHeading name="start_date">Cover</TableHeading>
                            <TableHeading name="start_date">Metronome</TableHeading>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <thead className="text-xs text-white uppercase bg-dark-black dark:bg-dark-black dark:text-white border-b-2 border-light-blue">
                        <tr className="text-nowrap">
                            <th className="py-3"></th>
                            <th className="py-3"></th>
                            <th className="py-3"></th>
                            <th className="py-3"></th>
                            <th className="py-3"></th>
                            <th className="py-3"></th>
                            <th className="py-3"></th>
                            <th className="py-3"></th>
                            <th className="py-3"></th>
                            <th className="py-3"></th>
                            <th className="py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.data.map((song) => (
                            <tr key={song.id} className="text-white dark:text-white dark:border-white even:bg-light-blue odd:bg-dark-blue">
                                <td className="px-3 py-3.5"><img src={song.album_cover} style={{height:50}}></img></td>
                                <td className="px-3 py-2">{song.title}</td>
                                <td className="px-3 py-2">{song.album}</td>
                                <td className="px-3 py-2">{song.artist}</td>
                                <td className="px-3 py-3.5">{formatTime(song.length)}</td>
                                <td className="px-3 py-2">{song.bpm}</td>
                                <td className="px-3 py-2">{song.key}</td>
                                <td className="px-3 py-2">{song.tuning}</td>
                                <td className="px-3 py-2">{song.cover ? "Yes" : "No"}</td>
                                <td className="px-3 py-2">{song.metronome ? "Yes" : "No"}</td>
                                <td className="text-nowrap">
                                    <button className="text-blue me-4" onClick={() => { 
                                        setSong(song);
                                        openModal()
                                    }}>Edit </button>
                                    <button className="text-white bg-red rounded-md py-2 px-2">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination links={songs.meta.links} />

            <EditSongModal show={editSongModal} onClose={closeModal} song={song}/>
        </>
    )
};
