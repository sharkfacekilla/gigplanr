export default function SearchCard({ item }) {
    const imageUrl = item?.images?.[0]?.url || '';  // Default to an empty string if undefined
    const title = item?.name || 'Unknown';          // Default to 'Unknown' if name is undefined

    return (
        <div className="w-full mx-auto max-w-xs sm:max-w-sm rounded-3xl overflow-hidden flex flex-col shadow-lg shadow-white/10">
            {/* Render image */}
            {imageUrl ? (
                <img src={imageUrl} alt={title} className="h-100 w-full object-cover" />
            ) : (
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-600">No Image</div>
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
