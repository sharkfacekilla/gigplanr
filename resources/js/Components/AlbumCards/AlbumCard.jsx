/**
 * v0 by Vercel.
 * @see https://v0.dev/t/onCZGW45XbQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function AlbumCard({album, tracks}) {
    // console.log(album[0].name);
    // console.log(album[0].artists[0]);
    // console.log(tracks);
    return (
      <div className="flex text-white items-center max-w-md rounded-lg border">
        <img
          src="/placeholder.svg"
          alt="Album Cover"
          width={150}
          height={150}
          className="object-cover rounded-l-md rounded-r-none"
        />
        <div className="flex-1 p-4">
          {/* <h2 className="text-xl font-bold">{album[0].name}</h2> */}
          <div className="mt-2 text-sm text-muted-foreground"></div>
          <div className="mt-4 max-h-40 overflow-auto">
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <div className="font-medium">Gentle Breeze</div>
                <div className="text-muted-foreground">3:24</div>
              </li>
              <li className="flex items-center justify-between">
                <div className="font-medium">Sunset Serenade</div>
                <div className="text-muted-foreground">4:12</div>
              </li>
              <li className="flex items-center justify-between">
                <div className="font-medium">Moonlit Lullaby</div>
                <div className="text-muted-foreground">5:01</div>
              </li>
              <li className="flex items-center justify-between">
                <div className="font-medium">Whispers of the Wind</div>
                <div className="text-muted-foreground">3:48</div>
              </li>
              <li className="flex items-center justify-between">
                <div className="font-medium">Echoes of the Forest</div>
                <div className="text-muted-foreground">4:29</div>
              </li>
              <li className="flex items-center justify-between">
                <div className="font-medium">Tranquil Tides</div>
                <div className="text-muted-foreground">3:56</div>
              </li>
              <li className="flex items-center justify-between">
                <div className="font-medium">Dreamscape Melodies</div>
                <div className="text-muted-foreground">4:17</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }