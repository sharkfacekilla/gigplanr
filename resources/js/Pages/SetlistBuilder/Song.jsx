import React from 'react';
import { GripIcon, XIcon } from "./Icons";
import PrimaryButton from "@/Components/PrimaryButton";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function SongItem({ song, onRemove }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: song.id });

  const style = {
    transition: transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <li className="bg-muted rounded-md p-4 flex items-center justify-between">
      <div ref={setNodeRef} {...attributes} {...listeners} style={style} className="flex-grow">
        <div className="flex items-center gap-4">
          <GripIcon className="w-4 h-4 text-muted-foreground" />
          <div>
            <h3 className="font-semibold">{song.title}</h3>
            <p className="text-muted-foreground">
              {song.artist} - {song.duration} ({song.key})
            </p>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 ml-4">
        <PrimaryButton
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation(); // Prevent drag event
            onRemove(song.id);
          }}
        >
          <XIcon className="w-4 h-4 text-muted-foreground" />
        </PrimaryButton>
      </div>
    </li>
  );
}
