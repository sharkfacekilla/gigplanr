import React, { useState } from 'react';
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import EditSongModal from '@/Components/Modals/EditSongModal';
import { Head, Link, router } from "@inertiajs/react";
import DeleteSongModal from '@/Components/Modals/DeleteSongModal';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { FilePenIcon, TrashIcon } from '@/Pages/SetlistBuilder/Icons';


export default function SongDrawer({ open, toggleDrawer, songs, selectedAlbum }) {
    const filteredSongs = selectedAlbum ? songs.data.filter(song => song.album === selectedAlbum.album).sort((a,b) => a.album_track_number - b.album_track_number) : [];
    const otherSongs = songs.data.filter(song => !song.album).sort((a, b) => a.album_track_number - b.album_track_number);
    const [song, setSong] = useState(null);
    const [editSongModal, setEditSongModal] = useState(false);
    const [deleteSongModal, setDeleteSongModal] = useState(false);

    const openModal = () => {
        setEditSongModal(true);
    }

    const closeModal = () => {
        setEditSongModal(false);
    };

    const handleDelete = () => {
        setDeleteSongModal(true);
    };

    const closeDeleteModal = () => {
        setDeleteSongModal(false);
    };


    const list = () => (
        <Box
            sx={{ width: 'auto' }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
          {/* 
            Use this if I want to include an X button in the list...
                <button
              type="button"
              className="absolute top-2 right-3 text-gray-400 hover:text-gray-600"
              onClick={close}
          >
              <XMarkIcon className="w-6 h-6 ms-2" aria-hidden="true" />
              <span className="text-xs text-center">Close</span>
          </button> */}
            <ul className="divide-y divide-blue">
                {filteredSongs.map((song, index) => (
                    <li 
                        key={song.id} 
                        className="relative flex items-start p-4 bg-gray-800 text-white"
                    >
                        <div className="flex-1 flex flex-col justify-between" onClick={(e) => e.stopPropagation()} >
                            <span className="font-bold text-lg mr-4">{index + 1} . {song.title}</span>
                            <div className="flex justify-between items-start mb-1"></div>
                            <span className="text-gray-400 text-sm">Length: {song.length}</span>
                            <span className="text-gray-400 text-sm">Key: {song.key ? song.key : "N/A"}</span>
                            <span className="text-gray-400 text-sm">Tuning: {song.tuning ? song.tuning : "N/A"}</span>
                            <span className="text-gray-400 text-sm">BPM: {song.bpm ? song.bpm : "N/A"}</span>
                            <span className="text-gray-400 text-sm">Metronome: {song.metronome ? song.metronome : "N/A"}</span>
                        </div>
                        <div className="absolute top-0 right-0 mt-12 mb-12 me-36 flex flex-col items-center z-10">
                            <FilePenIcon className="w-8 h-8 text-white cursor-pointer hover:text-teal" onClick={() => { setSong(song); openModal(); }} />
                            <span className="absolute text-sm mt-10 z-10" onClick={() => { setSong(song); openModal(); }}>Edit</span>
                        </div>
                        <div className="absolute top-0 right-0 mt-12 mb-12 me-12 flex flex-col items-center z-10">
                            <TrashIcon  className="w-8 h-8 text-red cursor-pointer hover:text-light-red" onClick={() => { setSong(song); handleDelete(); }} />
                            <span className=" absolute text-sm mt-10 z-10 text-red" onClick={() => { setSong(song); handleDelete(); }}>Delete</span>
                        </div>
                    </li>
                ))}
            </ul>
        </Box>
    );


    return (
        <>
            <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)} sx={{ '& .MuiDrawer-paper': { height: '60%', backgroundColor: '#222222', color: '#FFFFFF' } }}>
                {list()}
            </Drawer>
        
            <EditSongModal show={editSongModal} onClose={closeModal} song={song}/>
            <DeleteSongModal show={deleteSongModal} onClose={closeDeleteModal} song={song} />
        </>
    );
};
