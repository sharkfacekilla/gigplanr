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
                    					src={album.album_cover}
                    					alt="Album Cover"
                    					className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                  					/>
                				</div>
                				<span className="sr-only">View Album</span>
                				<h3 className="text-lg font-semibold text-foreground line-clamp-2 mt-2 text-white">{album.album}</h3>
                				<p className="text-sm text-muted-foreground text-white mt-2">{album.artist}</p>
              				</div>
            			</div>
          			))}
        		</div>
      		</div>
    	</>
  	);
}
  



// <Link href="#" className="group relative overflow-hidden rounded-lg shadow-lg" prefetch={false}>

// </Link>
// <Link href="#" className="group relative overflow-hidden rounded-lg shadow-lg" prefetch={false}>
//   <div className="absolute inset-0 z-10">
//     <span className="sr-only">View Album</span>
//   </div>
//   <img
//     src="/placeholder.svg"
//     alt="Album Cover"
//     width={300}
//     height={300}
//     className="h-72 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
//   />
//   <div className="p-4 bg-background">
//     <h3 className="text-lg font-semibold text-foreground line-clamp-1">Rumours</h3>
//     <p className="text-sm text-muted-foreground">Fleetwood Mac</p>
//   </div>
// </Link>
// <Link href="#" className="group relative overflow-hidden rounded-lg shadow-lg" prefetch={false}>
//   <div className="absolute inset-0 z-10">
//     <span className="sr-only">View Album</span>
//   </div>
//   <img
//     src="/placeholder.svg"
//     alt="Album Cover"
//     width={300}
//     height={300}
//     className="h-72 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
//   />
//   <div className="p-4 bg-background">
//     <h3 className="text-lg font-semibold text-foreground line-clamp-1">Purple Rain</h3>
//     <p className="text-sm text-muted-foreground">Prince</p>
//   </div>
// </Link>
// <Link href="#" className="group relative overflow-hidden rounded-lg shadow-lg" prefetch={false}>
//   <div className="absolute inset-0 z-10">
//     <span className="sr-only">View Album</span>
//   </div>
//   <img
//     src="/placeholder.svg"
//     alt="Album Cover"
//     width={300}
//     height={300}
//     className="h-72 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
//   />
//   <div className="p-4 bg-background">
//     <h3 className="text-lg font-semibold text-foreground line-clamp-1">Born to Run</h3>
//     <p className="text-sm text-muted-foreground">Bruce Springsteen</p>
//   </div>
// </Link>
// <Link href="#" className="group relative overflow-hidden rounded-lg shadow-lg" prefetch={false}>
//   <div className="absolute inset-0 z-10">
//     <span className="sr-only">View Album</span>
//   </div>
//   <img
//     src="/placeholder.svg"
//     alt="Album Cover"
//     width={300}
//     height={300}
//     className="h-72 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
//   />
//   <div className="p-4 bg-background">
//     <h3 className="text-lg font-semibold text-foreground line-clamp-1">Nevermind</h3>
//     <p className="text-sm text-muted-foreground">Nirvana</p>
//   </div>
// </Link>
// <Link href="#" className="group relative overflow-hidden rounded-lg shadow-lg" prefetch={false}>
//   <div className="absolute inset-0 z-10">
//     <span className="sr-only">View Album</span>
//   </div>
//   <img
//     src="/placeholder.svg"
//     alt="Album Cover"
//     width={300}
//     height={300}
//     className="h-72 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
//   />
//   <div className="p-4 bg-background">
//     <h3 className="text-lg font-semibold text-foreground line-clamp-1">Thriller</h3>
//     <p className="text-sm text-muted-foreground">Michael Jackson</p>
//   </div>
// </Link>
// <Link href="#" className="group relative overflow-hidden rounded-lg shadow-lg" prefetch={false}>
//   <div className="absolute inset-0 z-10">
//     <span className="sr-only">View Album</span>
//   </div>
//   <img
//     src="/placeholder.svg"
//     alt="Album Cover"
//     width={300}
//     height={300}
//     className="h-72 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
//   />
//   <div className="p-4 bg-background">
//     <h3 className="text-lg font-semibold text-foreground line-clamp-1">The Dark Side of the Moon</h3>
//     <p className="text-sm text-muted-foreground">Pink Floyd</p>
//   </div>
// </Link>
// <Link href="#" className="group relative overflow-hidden rounded-lg shadow-lg" prefetch={false}>
//   <div className="absolute inset-0 z-10">
//     <span className="sr-only">View Album</span>
//   </div>
//   <img
//     src="/placeholder.svg"
//     alt="Album Cover"
//     width={300}
//     height={300}
//     className="h-72 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
//   />
//   <div className="p-4 bg-background">
//     <h3 className="text-lg font-semibold text-foreground line-clamp-1">
//       Sgt. Pepper's Lonely Hearts Club Band
//     </h3>
//     <p className="text-sm text-muted-foreground">The Beatles</p>
//   </div>
// </Link>
// <Link href="#" className="group relative overflow-hidden rounded-lg shadow-lg" prefetch={false}>
//   <div className="absolute inset-0 z-10">
//     <span className="sr-only">View Album</span>
//   </div>
//   <img
//     src="/placeholder.svg"
//     alt="Album Cover"
//     width={300}
//     height={300}
//     className="h-72 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
//   />
//   <div className="p-4 bg-background">
//     <h3 className="text-lg font-semibold text-foreground line-clamp-1">Graceland</h3>
//     <p className="text-sm text-muted-foreground">Paul Simon</p>
//   </div>
// </Link>
// </div>