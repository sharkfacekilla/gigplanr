import React from 'react';
import Button from '@mui/material/Button';
import { Link } from '@inertiajs/react';

export default function AnchorDrawer({ toggleDrawer, songs, handleAlbumSelect }) {
	const albums = songs.data.filter(song => song.album);
	const nonAlbums = songs.data.filter(song => song.album === null);
	const uniqueAlbums = Array.from(
		new Map(
			albums.filter(song => song.album !== null).map((song) => [
				song.album, song
			])
		).values()
	);
	const uniqueNonAlbums = Array.from(
		new Map(
			nonAlbums.map((song) => [
				song.album, song
			])
		).values()
	);
	const sortedAlbums = [...uniqueAlbums, ...uniqueNonAlbums];
	console.log(sortedAlbums);
    return (
        <>
      		<div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        		<div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          			{sortedAlbums.map((album, index) => (
            			<div key={index} className="p-4 bg-blue/80 rounded-xl shadow-xl shadow-dark-black hover:shadow-lg hover:shadow-teal move-up">
            				<div role="button" tabIndex={0} onClick={() => handleAlbumSelect(album)} className="relative w-full cursor-pointer">
                				<div className="w-full" style={{ paddingTop: '100%', position: 'relative' }}>
                  					<img
                    					src={album.album_cover ? album.album_cover : "/img/no-img.svg"}
                    					alt="Album Cover"
                    					className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80 rounded-t-xl"
                  					/>
                				</div>
                				<span className="sr-only">View Album</span>
								<div className="bg-dark-black pt-4 pb-4 rounded-b-xl ps-4">

                				<h3 className="text-lg font-semibold text-foreground line-clamp-1 mt-2 text-white">{album.album ? album.album : "Various/Unknown Albums"}</h3>
                				<p className="text-sm text-muted-foreground text-white mt-2">{album.artist ? album.artist : "Various/Unknown Artists"}</p>
								</div>

              				</div>
            			</div>
          			))}
        		</div>
      		</div>
    	</>
  	);
};
