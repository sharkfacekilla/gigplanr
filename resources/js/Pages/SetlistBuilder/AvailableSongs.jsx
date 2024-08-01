import React from "react";
import AvailableSong from "./AvailableSong";

export default function AvailableSongs({ availableSongs, onAddToSetlist }) {
  return (
    <div className="bg-background rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold">Available Songs</h2>
        <p className="text-muted-foreground">Click the button to add songs to your setlist.</p>
      </div>
      <div className="p-6 space-y-4">
        {availableSongs.map((song) => (
          <div key={song.id}>
            <AvailableSong song={song} onAddToSetlist={onAddToSetlist} />
          </div>
        ))}
      </div>
    </div>
  );
}
