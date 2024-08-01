// pages/SetlistBuilder.js
import { useEffect, useState } from "react";
// import Setlist from "@/components/Setlist";
// import AvailableSongs from "@/components/AvailableSongs";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Setlist from "./Setlist";
import AvailableSongs from "./AvailableSongs";

export default function SetlistBuilder({ auth }) {
  const [setlist, setSetlist] = useState([
    {
      id: 1,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      duration: "5:55",
      key: "B♭ Major",
    },
    {
      id: 2,
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      duration: "8:02",
      key: "D Major",
    },
    {
      id: 3,
      title: "Imagine",
      artist: "John Lennon",
      duration: "3:10",
      key: "C Major",
    },
  ]);

  const [availableSongs, setAvailableSongs] = useState([
    {
      id: 4,
      title: "Sweet Caroline",
      artist: "Neil Diamond",
      duration: "3:21",
      key: "G Major",
    },
    {
      id: 5,
      title: "Wonderwall",
      artist: "Oasis",
      duration: "4:18",
      key: "G Major",
    },
    {
      id: 6,
      title: "Smells Like Teen Spirit",
      artist: "Nirvana",
      duration: "5:01",
      key: "E Minor",
    },
  ]);

  const handleDragStart = (e, song, type) => {
    e.dataTransfer.setData("song", JSON.stringify(song));
    e.dataTransfer.setData("type", type);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const song = JSON.parse(e.dataTransfer.getData("song"));
    const type = e.dataTransfer.getData("type");

    if (index === undefined) {
      setSetlist([song]);
      setAvailableSongs(availableSongs.filter((s) => s.id !== song.id));
    } else if (type === "available") {
      setSetlist([...setlist, song]);
      setAvailableSongs(availableSongs.filter((s) => s.id !== song.id));
    } else {
      const dragIndex = setlist.findIndex((s) => s.id === song.id);
      const [removed] = setlist.splice(dragIndex, 1);
      setSetlist([...setlist.slice(0, index), removed, ...setlist.slice(index)]);
    }
  };

  const handleRemove = (id) => {
    const songToRemove = setlist.find((song) => song.id === id);
    setSetlist(setlist.filter((song) => song.id !== id));
    setAvailableSongs([...availableSongs, songToRemove]);
  };

  useEffect(() => {
    console.log(setlist.length);
    console.log(setlist);
  }, [setlist]);

  return (
    <AuthenticatedLayout user={auth.user}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 p-8 text-white">
        <Setlist
          setlist={setlist}
          onDragStart={handleDragStart}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onRemove={handleRemove}
        />
        <AvailableSongs
          availableSongs={availableSongs}
          onDragStart={handleDragStart}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        />
      </div>
    </AuthenticatedLayout>
  );
}
