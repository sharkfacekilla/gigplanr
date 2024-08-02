import React from 'react';
import Button from '@mui/material/Button';
import { Link } from '@inertiajs/react';

export default function AnchorDrawer({ toggleDrawer, songs, handleAlbumSelect }) {
    const uniqueAlbums = Array.from(
        new Map(
            songs.data.map((song) => [
                `${song.album}`,
                song,
            ])
        ).values()
    );
    return (
        <>
      		<div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        		<div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          			{uniqueAlbums.map((album, index) => (
            			<div key={index} className="p-4 bg-background">
            				<div role="button" tabIndex={0} onClick={() => handleAlbumSelect(album)} className="relative w-full cursor-pointer">
                				<div className="w-full" style={{ paddingTop: '100%', position: 'relative' }}>
                  					<img
                    					src={album.album_cover ? album.album_cover : "/img/no-img.svg"}
                    					alt="Album Cover"
                    					className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                  					/>
                				</div>
                				<span className="sr-only">View Album</span>
                				<h3 className="text-lg font-semibold text-foreground line-clamp-2 mt-2 text-white">{album.album ? album.album : "Various/Unknown Albums"}</h3>
                				<p className="text-sm text-muted-foreground text-white mt-2">{album.artist ? album.artist : "Various/Unknown Artists"}</p>
              				</div>
            			</div>
          			))}
        		</div>
      		</div>
    	</>
  	);
};
