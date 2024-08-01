
import AvailableSong from "./AvailableSong";
import { Music2Icon } from "./Icons";
import {SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";
import { useDroppable } from '@dnd-kit/core';

export default function AvailableSongs({ availableSongs }) {
    const { isOver, setNodeRef } = useDroppable({
        id: 'setlist-droppable',
      });
    
      const style = {
        color: isOver ? 'green' : undefined,
      };
    return (
      <SortableContext items={availableSongs} strategy={verticalListSortingStrategy}>
    <div className="bg-background rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold">Available Songs</h2>
        <p className="text-muted-foreground">Drag and drop songs to add them to your setlist.</p>
      </div>
      <div className="p-6 space-y-4">
        {availableSongs.map((song) => (
            <div>
                <AvailableSong
                    key={song.id}
                    song={song}
                >
                </AvailableSong>
            </div>
        ))}
      </div>
    </div>
    </SortableContext>
  );
}

