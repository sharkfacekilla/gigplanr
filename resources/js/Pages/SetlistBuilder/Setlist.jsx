import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SongItem from './Song';

export default function Setlist({ setlist, onRemove }) {
	const { isOver, setNodeRef } = useDroppable({
    	id: 'setlist-droppable',
  	});

  	const style = {
	    color: isOver ? 'green' : undefined,
  	};

  	return (
	    <SortableContext items={setlist} strategy={verticalListSortingStrategy}>
		    <div ref={setNodeRef} className="bg-background rounded-lg shadow-sm">
      			<div className="mt-6 border-b">
        			<h1 className="text-2xl font-bold">Setlist Builder</h1>
        			<p className="text-muted-foreground mb-4 pb-4 mt-1">Add songs to build your setlist. Drag to re-order</p>
      			</div>
      			<div className="p-6 scrollable-container">
        			<ul className="space-y-4" style={style}>
            			{setlist.map((song) => (
              				<SongItem
                				key={song.id}
                				song={song}
                				onRemove={onRemove}
              				/>
            			))}
          				{setlist.length === 0 && (
            				<li className="h-20 border-dashed border-2 border-gray-300 bg-gray-100 flex items-center justify-center">Select a song to start a new setlist</li>
          				)}
        			</ul>
      			</div>
    		</div>
        </SortableContext>
  	);
};
