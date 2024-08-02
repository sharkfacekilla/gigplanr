// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/Y0c1f3srcvt
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import Link from "next/link"
// import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer"
// import { Button } from "@/components/ui/button"

import { useState } from "react";
import AnchorDrawer from "../DrawerComponents/AnchorDrawer";
import SongDrawer from "../SongDrawer";

// export default function Component() {
//   return (
//     <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">

//       {/* <Drawer>
//         <DrawerTrigger asChild>
//           <div className="sr-only">
//             <span>View Album Tracks</span>
//           </div>
//         </DrawerTrigger>
//         <DrawerContent className="p-6">
//           <DrawerHeader>
//             <DrawerTitle>Abbey Road</DrawerTitle>
//             <DrawerDescription>The Beatles</DrawerDescription>
//           </DrawerHeader>
//           <div className="mt-6 space-y-4">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-4">
//                 <div className="flex-shrink-0">
//                   <Music2Icon className="h-6 w-6 text-muted-foreground" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold text-foreground">Come Together</h4>
//                   <p className="text-sm text-muted-foreground">4:20</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Button size="icon" variant="ghost">
//                   <FilePenIcon className="h-5 w-5 text-muted-foreground" />
//                 </Button>
//                 <Button size="icon" variant="ghost">
//                   <TrashIcon className="h-5 w-5 text-muted-foreground" />
//                 </Button>
//               </div>
//             </div>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-4">
//                 <div className="flex-shrink-0">
//                   <Music2Icon className="h-6 w-6 text-muted-foreground" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold text-foreground">Something</h4>
//                   <p className="text-sm text-muted-foreground">3:05</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Button size="icon" variant="ghost">
//                   <FilePenIcon className="h-5 w-5 text-muted-foreground" />
//                 </Button>
//                 <Button size="icon" variant="ghost">
//                   <TrashIcon className="h-5 w-5 text-muted-foreground" />
//                 </Button>
//               </div>
//             </div>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-4">
//                 <div className="flex-shrink-0">
//                   <Music2Icon className="h-6 w-6 text-muted-foreground" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold text-foreground">Maxwell's Silver Hammer</h4>
//                   <p className="text-sm text-muted-foreground">3:27</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Button size="icon" variant="ghost">
//                   <FilePenIcon className="h-5 w-5 text-muted-foreground" />
//                 </Button>
//                 <Button size="icon" variant="ghost">
//                   <TrashIcon className="h-5 w-5 text-muted-foreground" />
//                 </Button>
//               </div>
//             </div>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-4">
//                 <div className="flex-shrink-0">
//                   <Music2Icon className="h-6 w-6 text-muted-foreground" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold text-foreground">Oh! Darling</h4>
//                   <p className="text-sm text-muted-foreground">3:26</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Button size="icon" variant="ghost">
//                   <FilePenIcon className="h-5 w-5 text-muted-foreground" />
//                 </Button>
//                 <Button size="icon" variant="ghost">
//                   <TrashIcon className="h-5 w-5 text-muted-foreground" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </DrawerContent>
//       </Drawer>
//     </div> */}
//   )
// }

// // function FilePenIcon(props) {
// //   return (
// //     <svg
// //       {...props}
// //       xmlns="http://www.w3.org/2000/svg"
// //       width="24"
// //       height="24"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     >
// //       <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
// //       <path d="M14 2v4a2 2 0 0 0 2 2h4" />
// //       <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
// //     </svg>
// //   )
// // }


// // function Music2Icon(props) {
// //   return (
// //     <svg
// //       {...props}
// //       xmlns="http://www.w3.org/2000/svg"
// //       width="24"
// //       height="24"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     >
// //       <circle cx="8" cy="18" r="4" />
// //       <path d="M12 18V2l7 4" />
// //     </svg>
// //   )
// // }


// // function TrashIcon(props) {
// //   return (
// //     <svg
// //       {...props}
// //       xmlns="http://www.w3.org/2000/svg"
// //       width="24"
// //       height="24"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     >
// //       <path d="M3 6h18" />
// //       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
// //       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
// //     </svg>
// //   )
// // }


// // function XIcon(props) {
// //   return (
// //     <svg
// //       {...props}
// //       xmlns="http://www.w3.org/2000/svg"
// //       width="24"
// //       height="24"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     >
// //       <path d="M18 6 6 18" />
// //       <path d="m6 6 12 12" />
// //     </svg>
// //   )
// // }



export default function TableTest({songs}) {
    console.log(songs);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
  
    const toggleDrawer = (open) => () => {
      setDrawerOpen(open);
    };

    const handleAlbumSelect = (album) => {
        setSelectedAlbum(album);
        setDrawerOpen(true);
    }
  
    return (
      <div>
        <AnchorDrawer toggleDrawer={toggleDrawer} handleAlbumSelect={handleAlbumSelect} songs={songs}/>
        <SongDrawer open={drawerOpen} toggleDrawer={toggleDrawer} songs={songs} selectedAlbum={selectedAlbum}/>
      </div>
    );
  }