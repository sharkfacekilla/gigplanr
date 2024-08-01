import React from 'react';
import { Music2Icon } from "./Icons";
import PrimaryButton from "@/Components/PrimaryButton";

export default function AvailableSong({ song, onAddToSetlist }) {
  return (
    <div className="bg-muted rounded-md p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Music2Icon className="w-4 h-4 text-muted-foreground" />
        <div>
          <h3 className="font-semibold">{song.title}</h3>
          <p className="text-muted-foreground">
            {song.artist} - {song.duration} ({song.key})
          </p>
        </div>
      </div>
      <PrimaryButton onClick={() => onAddToSetlist(song)}>Add to Setlist</PrimaryButton>
    </div>
  );
}
