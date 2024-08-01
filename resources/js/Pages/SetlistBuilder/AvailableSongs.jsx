// components/AvailableSongs.js
import { Music2Icon } from "./Icons";

function AvailableSongs({ availableSongs, onDragStart, onDragOver, onDrop }) {
  return (
    <div className="bg-background rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold">Available Songs</h2>
        <p className="text-muted-foreground">Drag and drop songs to add them to your setlist.</p>
      </div>
      <div className="p-6 space-y-4">
        {availableSongs.map((song) => (
          <div
            key={song.id}
            className="bg-muted rounded-md p-4 flex items-center justify-between cursor-grab"
            draggable
            onDragStart={(e) => onDragStart(e, song, "available")}
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, availableSongs.length)}
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
        ))}
      </div>
    </div>
  );
}

export default AvailableSongs;
