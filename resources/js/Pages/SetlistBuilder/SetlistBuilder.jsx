import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { closestCorners } from "@dnd-kit/core";
import Setlist from './Setlist';
import AvailableSongs from './AvailableSongs';
import { DndContext } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

export default function SetlistBuilder({ auth, songs }) {
  console.log(songs.data);
  const data = songs.data;
  const [setlist, setSetlist] = useState([
    // { id: 1, title: "Bohemian Rhapsody", artist: "Queen", duration: "5:55", key: "B♭ Major" },
    // { id: 2, title: "Stairway to Heaven", artist: "Led Zeppelin", duration: "8:02", key: "D Major" },
    // { id: 3, title: "Imagine", artist: "John Lennon", duration: "3:10", key: "C Major" },
  ]);

  const [availableSongs, setAvailableSongs] = useState([...data]);
  console.log(availableSongs);

  const getSongPos = (id) => setlist.findIndex((setlist) => setlist.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    setSetlist((setlist) => {
      const originalPos = getSongPos(active.id);
      const newPos = getSongPos(over.id);

      return arrayMove(setlist, originalPos, newPos);
    });
  };

  const handleAddToSetlist = (song) => {
    setSetlist([...setlist, song]);
    setAvailableSongs(availableSongs.filter((s) => s.id !== song.id));
  };

  const handleRemove = (id) => {
    console.log("Removing song with id:", id); // Log the song id being removed

    const songToRemove = setlist.find((song) => song.id === id);
    setSetlist(setlist.filter((song) => song.id !== id));
    setAvailableSongs([...availableSongs, songToRemove]);
  };

  useEffect(() => {
    console.log(setlist);
  }, [setlist])

  return (
    <AuthenticatedLayout user={auth.user}>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 p-8 text-white">
          <Setlist setlist={setlist} onRemove={handleRemove} />
          <AvailableSongs availableSongs={availableSongs} onAddToSetlist={handleAddToSetlist} />
        </div>
      </DndContext>
    </AuthenticatedLayout>
  );
}
