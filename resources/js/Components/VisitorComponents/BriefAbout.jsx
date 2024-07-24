export default function BriefAbout(){
    return (
        <>
        <div className="flex items-center justify-center min-h-screen p-6">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 bg-green rounded-lg shadow-lg p-6 md:p-8">
            <div className="md:ms-3 lg:ms-4 grid grid-cols-2 gap-4 w-full md:w-1/2">
              <div className="transform rotate-3d drop-shadow-lg flex items-center justify-center rounded-lg" style={{ width: '100%', maxWidth: 200, height: 'auto' }}>
                <img src="img/americanIdiot.png" alt="American Idiot Album Cover" className="w-full h-full object-cover rounded-md" />
              </div>
              <div className="transform rotate-3d drop-shadow-lg flex items-center justify-center rounded-lg" style={{ width: '100%', maxWidth: 200, height: 'auto' }}>
                <img src="img/gotTime.png" alt="Got Time EP Album Cover" className="w-full h-full object-cover rounded-md" />
              </div>
              <div className="transform rotate-3d drop-shadow-lg flex items-center justify-center rounded-lg" style={{ width: '100%', maxWidth: 200, height: 'auto' }}>
                <img src="img/brainSpank.jpg" alt="Brain Spank" className="w-full h-full object-cover rounded-md" />
              </div>
              <div className="transform rotate-3d drop-shadow-lg flex items-center justify-center rounded-lg" style={{ width: '100%', maxWidth: 200, height: 'auto' }}>
                <img src="img/rightReasons.jpg" alt="All The Right Reasons Album Cover" className="w-full h-full object-cover rounded-md" />
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4 w-full md:w-1/2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Welcome to GigPlanr
              </h1>
              <p className="text-white text-sm md:text-base">
                GigPlanr ("Gig Planner") is your ultimate companion for organizing successful gigs. With intuitive tools and seamless integration, you can manage every aspect of your event from start to finish. Whether it's a concert, conference, or party, GigPlanr makes planning easy and stress-free.
              </p>
              <a href="/register" className="mt-4 px-4 py-2 md:px-6 md:py-3 bg-dark-blue text-white rounded-full font-semibold shadow-md hover:bg-light-blue">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </>
    )
}