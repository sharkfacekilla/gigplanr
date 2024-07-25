/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QVTZ7Db3Y2Q
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component({key, track}) {
    console.log(track.album.name);
    console.log(track.album.images[1]);
    return (
      <div key={key} className="w-full mx-auto max-w-sm rounded-lg overflow-hidden flex flex-row border border-white/50">
        <img src={track.album.images[1].url} alt="Card Image" className="h-[200px] w-1/2 object-cover" />
        <div className="p-4 flex items-center justify-center flex-1">
          <h3 className="text-xl text-white font-semibold">{track.album.name}</h3>
        </div>
      </div>
    )
  }