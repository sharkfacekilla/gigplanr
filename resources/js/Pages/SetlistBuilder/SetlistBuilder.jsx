import React from 'react';
import { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { closestCorners, useDroppable } from "@dnd-kit/core";
import Setlist from './Setlist';
import AvailableSongs from './AvailableSongs';
import { DndContext } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';


export default function SetlistBuilder({ auth, songs }) {
    
    
  const [setlist, setSetlist] = useState([
    { id: 1, title: "Bohemian Rhapsody", artist: "Queen", duration: "5:55", key: "B♭ Major" },
    { id: 2, title: "Stairway to Heaven", artist: "Led Zeppelin", duration: "8:02", key: "D Major" },
    { id: 3, title: "Imagine", artist: "John Lennon", duration: "3:10", key: "C Major" },
  ]);

  const [availableSongs, setAvailableSongs] = useState([
    { id: 4, title: "Sweet Caroline", artist: "Neil Diamond", duration: "3:21", key: "G Major" },
    { id: 5, title: "Wonderwall", artist: "Oasis", duration: "4:18", key: "G Major" },
    { id: 6, title: "Smells Like Teen Spirit", artist: "Nirvana", duration: "5:01", key: "E Minor" },
  ]);

  const getSongPos = (id) => setlist.findIndex((setlist) => setlist.id === id)

  const handleDragEnd = event => {
    const {active, over} = event;
    if (active.id === over.id) {
        return;
    }
    setSetlist(setlist => {
        const originalPos = getSongPos(active.id);
        const newPos = getSongPos(over.id);

        return arrayMove(setlist, originalPos, newPos);
    })
  }


  const handleRemove = (id) => {
    const songToRemove = setlist.find((song) => song.id === id);
    setSetlist(setlist.filter((song) => song.id !== id));
    setAvailableSongs([...availableSongs, songToRemove]);
  };

  return (
      <AuthenticatedLayout user={auth.user}>
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 p-8 text-white">  
                <Setlist
                  setlist={setlist}
                onRemove={handleRemove}
                />
                <AvailableSongs
                    availableSongs={availableSongs}
                />
            </div>
        </DndContext>
    </AuthenticatedLayout>
  );
}
