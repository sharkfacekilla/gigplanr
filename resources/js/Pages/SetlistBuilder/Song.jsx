import React from 'react';
import { GripIcon, XIcon } from "./Icons";
import PrimaryButton from "@/Components/PrimaryButton";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Song({ song, onDragStart, onDragOver, onDrop, onRemove, index }) {
    const id = song.id
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }

    // console.log(style);
  return (
    <>
        <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
            <li
            key={song.id}
            
            className="bg-muted rounded-md p-4 flex items-center justify-between"
            >
            <div className="flex items-center gap-4">
                <GripIcon className="w-4 h-4 text-muted-foreground" />
                <div>
                <h3 className="font-semibold">{song.title}</h3>
                <p className="text-muted-foreground">
                    {song.artist} - {song.duration} ({song.key})
                </p>
                </div>
            </div>
            <PrimaryButton variant="ghost" size="icon" onClick={() => onRemove(song.id)}>
                <XIcon className="w-4 h-4 text-muted-foreground" />
            </PrimaryButton>
            </li>

        </div>
    </>
  );
}
