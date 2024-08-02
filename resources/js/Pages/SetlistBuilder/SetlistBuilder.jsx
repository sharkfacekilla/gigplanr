import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { closestCorners } from "@dnd-kit/core";
import Setlist from './Setlist';
import AvailableSongs from './AvailableSongs';
import { DndContext } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

export default function SetlistBuilder({ auth, songs }) {
  	// console.log(songs.data);
  	const data = songs.data;
  	const [setlist, setSetlist] = useState([]);

  	const [availableSongs, setAvailableSongs] = useState([...data]);
  	// console.log(availableSongs);

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
    	const songToRemove = setlist.find((song) => song.id === id);
    	setSetlist(setlist.filter((song) => song.id !== id));
    	setAvailableSongs([...availableSongs, songToRemove]);
  	};

	//for debugging...
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
};
