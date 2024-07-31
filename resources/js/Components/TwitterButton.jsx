export default function TwitterButton({text}) {
    return (
        <div className="flex items-center justify-center w-full mx-auto">
            <a href="/auth/twitter/redirect" className="flex items-center justify-center w-full text-white bg-[#000000] hover:bg-[#222222]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x me-2" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
                {text} with X
            </a>
        </div>
    );
}