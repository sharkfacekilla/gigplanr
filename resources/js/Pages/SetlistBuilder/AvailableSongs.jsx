import React from "react";
import AvailableSong from "./AvailableSong";


// Define the order of statuses and their display names
const STATUS_ORDER = {
	"staple": 1,
  	"most_often": 2,
  	"rarities": 3,
  	"other": 4,
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
			<div key={status} className="mb-10">
			  <h3 className="text-lg font-semibold mb-4 mt-4">{STATUS_DISPLAY_NAMES[status]}</h3>
			  {filteredSongs.length > 0 ? (
				filteredSongs.map((song) => (
				  <div key={song.id} className="mb-4 pb-4 border muted-card border-white rounded-3xl">
					<AvailableSong song={song} onAddToSetlist={onAddToSetlist} />
				  </div>
				))
			  ) : (
				<p>No songs found! Add some!</p>
			  )}
			</div>
		  );
	};

	return (
		<div className="rounded-lg shadow-sm muted ps-6 pe-6 pb-6 mt-6">
			<div className="border-b mb-2">
				<h2 className="text-xl font-bold mb-2">Available Songs</h2>
				<p className="mb-2">Click the button to add songs to your setlist.</p>
		  	</div>
		  	<div className="space-y-4 scrollable-container">
				{renderSongsByStatus("staple") && (
			  	<>
					{renderSongsByStatus("staple")}
					<hr />
			  	</>
				)}
				{renderSongsByStatus("most_often") && (
			  	<>
					{renderSongsByStatus("most_often")}
					<hr />
			  	</>
				)}
				{renderSongsByStatus("rarities") && (
			  	<>
					{renderSongsByStatus("rarities")}
					<hr />
			  	</>
				)}
				{renderSongsByStatus("other") && (
			  	<>
					{renderSongsByStatus("other")}
					<hr />
			  	</>
				)}
		  	</div>
		</div>
	);
};