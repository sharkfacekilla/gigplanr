// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { Head } from "@inertiajs/react";
// // import { useState } from "react";
// import Setlist from "../SetlistBuilder/Setlist";

// // export default function ListTest({ auth, songs }) {
// //     const [selectedSongs, setSelectedSongs] = useState([]);

// //     return (
// //         <>
// //             <AuthenticatedLayout user={auth.user}>
// //                 <Head title="List Test Page" />
// //                 <h1>Hello World!</h1>
// //                 {songs.data.map((song) => (
// //                     <div key={song.id}>
// //                         <p>{song.title}</p>
// //                     </div>
// //                 ))}
// //                 <Setlist songs={selectedSongs} />
// //             </AuthenticatedLayout>
// //         </>
// //     );
// //}



// import { useEffect, useState } from "react";
// import PrimaryButton from "@/Components/PrimaryButton";

// export default function Component({auth}) {
//   const [setlist, setSetlist] = useState([
//     {
//       id: 1,
//       title: "Bohemian Rhapsody",
//       artist: "Queen",
//       duration: "5:55",
//       key: "B♭ Major",
//     },
//     {
//       id: 2,
//       title: "Stairway to Heaven",
//       artist: "Led Zeppelin",
//       duration: "8:02",
//       key: "D Major",
//     },
//     {
//       id: 3,
//       title: "Imagine",
//       artist: "John Lennon",
//       duration: "3:10",
//       key: "C Major",
//     },
//   ]);

//   const [availableSongs, setAvailableSongs] = useState([
//     {
//       id: 4,
//       title: "Sweet Caroline",
//       artist: "Neil Diamond",
//       duration: "3:21",
//       key: "G Major",
//     },
//     {
//       id: 5,
//       title: "Wonderwall",
//       artist: "Oasis",
//       duration: "4:18",
//       key: "G Major",
//     },
//     {
//       id: 6,
//       title: "Smells Like Teen Spirit",
//       artist: "Nirvana",
//       duration: "5:01",
//       key: "E Minor",
//     },
//   ]);

//   const handleDragStart = (e, song, type) => {
//     e.dataTransfer.setData("song", JSON.stringify(song));
//     e.dataTransfer.setData("type", type);
//   };

//   const handleDrop = (e, index) => {
//     e.preventDefault();
//     const song = JSON.parse(e.dataTransfer.getData("song"));
//     const type = e.dataTransfer.getData("type");

//     if (index === undefined) {
//         setSetlist([song]);
//               setAvailableSongs(availableSongs.filter((s) => s.id !== song.id));

//     }

//     if (type === "available") {
//       // Add song to setlist and remove from availableSongs
//       setSetlist([...setlist, song]);
//       setAvailableSongs(availableSongs.filter((s) => s.id !== song.id));
//     } else {
//       // Move song within setlist
//       const dragIndex = setlist.findIndex((s) => s.id === song.id);
//       const [removed] = setlist.splice(dragIndex, 1);
//       setSetlist([...setlist.slice(0, index), removed, ...setlist.slice(index)]);
//     }
//   };

//   const handleRemove = (id) => {
//     const songToRemove = setlist.find((song) => song.id === id);
//     setSetlist(setlist.filter((song) => song.id !== id));
//     setAvailableSongs([...availableSongs, songToRemove]);
//   };
//   useEffect(() => {
//     console.log(setlist.length)
//     console.log(setlist)
//   })

//   return (
//     <>
//     <AuthenticatedLayout user={auth.user}>
//         <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 p-8 text-white">
//         <div className="bg-background rounded-lg shadow-sm">
//             <div className="p-6 border-b">
//             <h1 className="text-2xl font-bold">Setlist Builder</h1>
//             <p className="text-muted-foreground">Drag and drop songs to build your setlist.</p>
//             </div>
//             <div className="p-6">
//             <ul className="space-y-4">
//                 {setlist.map((song, index) => (
//                 <li
//                     key={song.id}
//                     draggable
//                     className="bg-muted rounded-md p-4 flex items-center justify-between"
//                     onDragStart={(e) => handleDragStart(e, song, "setlist")}
//                     onDragOver={(e) => e.preventDefault()}
//                     onDrop={(e) => handleDrop(e, index)}
//                 >
//                     <div className="flex items-center gap-4">
//                     <GripIcon className="w-4 h-4 text-muted-foreground" />
//                     <div>
//                         <h3 className="font-semibold">{song.title}</h3>
//                         <p className="text-muted-foreground">
//                         {song.artist} - {song.duration} ({song.key})
//                         </p>
//                     </div>
//                     </div>
//                     <PrimaryButton variant="ghost" size="icon" onClick={() => handleRemove(song.id)}>
//                     <XIcon className="w-4 h-4 text-muted-foreground" />
//                     </PrimaryButton>
//                 </li>
//                 ))}
//                 {setlist.length === 0 && 
//                 <li
//                 className="h-20 border-dashed border-2 border-gray-300 bg-gray-100 flex items-center justify-center"
//                 onDragOver={(e) => e.preventDefault()}
//                 onDrop={(e) => handleDrop(e)}
//                 >
//                 Drop here to add a start new setlist
//                 </li>
//                 }
//             </ul>
//             </div>
//         </div>
//         <div className="bg-background rounded-lg shadow-sm">
//             <div className="p-6 border-b">
//             <h2 className="text-xl font-bold">Available Songs</h2>
//             <p className="text-muted-foreground">Drag and drop songs to add them to your setlist.</p>
//             </div>
//             <div className="p-6 space-y-4">
//             {availableSongs.map((song) => (
//                 <div
//                 key={song.id}
//                 className="bg-muted rounded-md p-4 flex items-center justify-between cursor-grab"
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, song, "available")}
//                 onDragOver={(e) => e.preventDefault()}
//                 onDrop={(e) => handleDrop(e, setlist.length)}
//                 >
//                 <div className="flex items-center gap-4">
//                     <Music2Icon className="w-4 h-4 text-muted-foreground" />
//                     <div>
//                     <h3 className="font-semibold">{song.title}</h3>
//                     <p className="text-muted-foreground">
//                         {song.artist} - {song.duration} ({song.key})
//                     </p>
//                     </div>
//                 </div>
//                 </div>
//             ))}
//             </div>
//         </div>
//         </div>

//     </AuthenticatedLayout>
//     </>
//   );
// }

// function GripIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="5" r="1" />
//       <circle cx="19" cy="5" r="1" />
//       <circle cx="5" cy="5" r="1" />
//       <circle cx="12" cy="12" r="1" />
//       <circle cx="19" cy="12" r="1" />
//       <circle cx="5" cy="12" r="1" />
//       <circle cx="12" cy="19" r="1" />
//       <circle cx="19" cy="19" r="1" />
//       <circle cx="5" cy="19" r="1" />
//     </svg>
//   );
// }

// function Music2Icon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="8" cy="18" r="4" />
//       <path d="M12 18V2l7 4" />
//     </svg>
//   );
// }

// function XIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   );
// }

