import React from 'react';
import { GripIcon, XIcon } from "./Icons";
import PrimaryButton from "@/Components/PrimaryButton";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Music2Icon } from "./Icons";

export default function AvailableSong({song}) {
    const id = song.id
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    };

    return (
        <>
            <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
            <div
            key={song.id}
            className="bg-muted rounded-md p-4 flex items-center justify-between cursor-grab"
          >
            <div className="flex items-center gap-4">
              <Music2Icon className="w-4 h-4 text-muted-foreground" />
              <div>
                <h3 className="font-semibold">{song.title}</h3>
                <p className="text-muted-foreground">
                  {song.artist} - {song.duration} ({song.key})
                </p>
              </div>
            </div>
          </div>
            </div>
        </>
    )
}
