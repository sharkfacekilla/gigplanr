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
    console.log(songs);
    const [song, setSong] = useState(null);
    const [editSongModal, setEditSongModal] = useState(false);

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
