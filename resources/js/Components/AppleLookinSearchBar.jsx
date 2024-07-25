/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7DF1PPBcMQ4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function AppleLookinSearchBar({value, onChange}) {
    return (
        <div className="w-full mx-4">
          <div className="relative flex items-center bg-white rounded-full shadow-lg">
            <div className="absolute left-4 text-white">
              <SearchIcon className="w-6 h-6" />
            </div>
            <input
              type="text"
              value={value}
              onChange={onChange}
              placeholder="Search for an album or artist..."
              className="w-full py-4 pl-12 pr-4 bg-dark-black text-white rounded-full focus:ring-2 focus:ring-teal"
              />
          </div>
        </div>
    )
  }
  
  function SearchIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="teal"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
  
  
  function XIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    )
  }