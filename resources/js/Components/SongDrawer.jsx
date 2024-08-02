import React, { useState } from 'react';
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import EditSongModal from '@/Components/Modals/EditSongModal';
import { Head, Link, router } from "@inertiajs/react";
import DeleteSongModal from '@/Components/Modals/DeleteSongModal';

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
       <ul className="divide-y divide-gray-700">
        {filteredSongs.map((song, index) => (
          <li key={song.id} className="flex items-start p-4 bg-gray-800 text-white">
            <span className="font-bold text-lg mr-4">{index + 1}</span>
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-1">
                <span className="font-semibold">{song.title}</span>
              </div>
              <span className="text-gray-400 text-sm">Length: {song.length}</span>
              <span className="text-gray-400 text-sm">Key: {song.key ? song.key : "N/A"}</span>
              <span className="text-gray-400 text-sm">Tuning: {song.tuning? song.tuning : "N/A"}</span>
            </div>
            <div className="flex space-x-4 ml-4 my-auto">
              <FilePenIcon 
                className="w-6 h-6 text-white cursor-pointer hover:text-teal"
                onClick={() => { 
                  setSong(song);
                  openModal();
                }}
              />
              <TrashIcon 
                className="w-6 h-6 text-red cursor-pointer hover:text-red"
                onClick={() => {
                  setSong(song);
                  handleDelete();
                }} 
              />
            </div>
          </li>
        ))}
      </ul>
    </Box>
  );


  return (
    <>
        <Drawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{ '& .MuiDrawer-paper': { height: '60%', backgroundColor: '#222222', color: '#FFFFFF' } }}
        >
        {list()}
        </Drawer>
        <>
        <EditSongModal show={editSongModal} onClose={closeModal} song={song}/>
        </>
        <DeleteSongModal show={deleteSongModal} onClose={closeDeleteModal} song={song} />
    </>
    
);
}

function FilePenIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
      </svg>
    )
  }

  function TrashIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6h18" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      </svg>
    )
  }