import React from "react";
import AvailableSong from "./AvailableSong";


// Define the order of statuses and their display names
const STATUS_ORDER = {
  "staple": 1,
  "most_often": 2,
  "rarities": 3,
  "other": 4,  // Empty or null status
};

// Map stored statuses to user-friendly headings
const STATUS_DISPLAY_NAMES = {
  "staple": "Staple (or must play)",
  "most_often": "Most of the time",
  "rarities": "Rarities",
  "other": "Other",
};

export default function AvailableSongs({ availableSongs, onAddToSetlist }) {
  // Sort the songs based on status
  const sortedSongs = availableSongs.slice().sort((a, b) => {
    const statusA = a.status || "other";  // Default to "other"
    const statusB = b.status || "other";  // Default to "other"
    return (STATUS_ORDER[statusA] || STATUS_ORDER["other"]) - (STATUS_ORDER[statusB] || STATUS_ORDER["other"]);
  });

  // Helper function to render songs by status
  const renderSongsByStatus = (status) => {
    const filteredSongs = sortedSongs.filter(song => song.status === status);
    if (filteredSongs.length === 0) return null;

    return (
      <div key={status}>
        <h3 className="text-lg font-semibold">{STATUS_DISPLAY_NAMES[status]}</h3>
        {filteredSongs.map((song) => (
          <div key={song.id}>
            <AvailableSong song={song} onAddToSetlist={onAddToSetlist} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-background rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold">Available Songs</h2>
        <p className="text-muted-foreground">Click the button to add songs to your setlist.</p>
      </div>
      <div className="p-6 space-y-4 scrollable-container">
      {renderSongsByStatus("staple")}
        {renderSongsByStatus("most_often")}
        {renderSongsByStatus("rarities") && <hr />}
        {renderSongsByStatus("rarities")}
        {renderSongsByStatus("other") && <hr />}
        {renderSongsByStatus("other")}
      </div>
    </div>
  );
}
