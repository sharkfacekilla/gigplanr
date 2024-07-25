export default function SearchCard({ item }) {
    const imageUrl = item?.images?.[0]?.url || '';  // Default to an empty string if undefined
    const title = item?.name || 'Unknown';          // Default to 'Unknown' if name is undefined

    return (
        <div className="w-full mx-auto max-w-xs sm:max-w-sm rounded-3xl overflow-hidden flex flex-col shadow-lg shadow-white/10">
            {/* Render image */}
            {imageUrl ? (
                <img src={imageUrl} alt={title} className="w-full object-cover h-40 sm:h-48 md:h-64 lg:h-72" />
            ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-600">
                <img src={"https://fakeimg.pl/1920x1920?text=+No+Image&font=bebas"} alt="No Image Found."/>
            </div>
                
            )}
            {/* Render title */}
            <div className="p-4 flex bg-dark-black flex-col flex-1">
                <h3 className="text-lg text-center text-white font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap">
                    {title}
                </h3>
            </div>
        </div>
    );
}
