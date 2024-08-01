// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { Head } from "@inertiajs/react";
// import { useEffect, useRef, useState } from "react";

// export default function Setlist({ songs }) {
//     const [listOfSongs, setListOfSongs] = useState(songs);
//     const dragItem = useRef(null);
//     const draggedOverItem = useRef(null);

//     useEffect(() => {
//         setListOfSongs(songs);
//     }, [songs]);
    
//     const handleSort = () => {
//         const listClone = [...listOfSongs.data]; // Clone the data array
//         const temp = listClone[dragItem.current];
//         listClone[dragItem.current] = listClone[draggedOverItem.current];
//         listClone[draggedOverItem.current] = temp;
//         setListOfSongs({
//             ...listOfSongs,   
//             data: listClone,
//         });
//         console.log(listOfSongs);
//     };

//     console.log(listOfSongs);

//     if (!listOfSongs || !listOfSongs.data) {
//         return <div>No songs added yet!</div>;
//     }

//     return (
//         <>
//             <h1>Hello World!</h1>
//             {listOfSongs.data.map((song, index) => (
//                 <div
//                     key={song.id}
//                     draggable
//                     onDragStart={() => (dragItem.current = index)}
//                     onDragEnter={() => (draggedOverItem.current = index)}
//                     onDragEnd={handleSort}
//                     onDragOver={(e) => e.preventDefault()}
//                 >
//                 <p>{song.title}</p>
//                 </div>
//             ))}
//         </>
//     );
// }
// components/Setlist.js
import { GripIcon, XIcon } from "./Icons";
import PrimaryButton from "@/Components/PrimaryButton";

function Setlist({ setlist, onDragStart, onDragOver, onDrop, onRemove }) {
  return (
    <div className="bg-background rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold">Setlist Builder</h1>
        <p className="text-muted-foreground">Drag and drop songs to build your setlist.</p>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
          {setlist.map((song, index) => (
            <li
              key={song.id}
              draggable
              className="bg-muted rounded-md p-4 flex items-center justify-between"
              onDragStart={(e) => onDragStart(e, song, "setlist")}
              onDragOver={onDragOver}
              onDrop={(e) => onDrop(e, index)}
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
          ))}
          {setlist.length === 0 && 
          <li
            className="h-20 border-dashed border-2 border-gray-300 bg-gray-100 flex items-center justify-center"
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e)}
          >
            Drop here to start a new setlist
          </li>
          }
        </ul>
      </div>
    </div>
  );
}

export default Setlist;
