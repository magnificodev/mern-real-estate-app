import bgVideo from "../videos/bg-video.mp4";
import SearchBar from "../components/SearchBar";
import Statistics from "../components/Statistics";

const HomePage = () => {
    return (
        <div className="section-container">
            <div className="relative">
                <video
                    autoPlay
                    loop
                    muted
                    className="h-72 w-full rounded-2xl object-cover shadow-md brightness-75"
                >
                    <source src={bgVideo} type="video/mp4" />
                </video>
                <div className="absolute left-1/2 top-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2 space-y-4 text-center">
                    <h1 className="text-2xl font-bold text-white/80 sm:text-4xl md:text-5xl">
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p className="text-sm text-white/80 sm:text-lg md:text-xl">
                        Discover the best properties in your area and make your
                        dream home a reality.
                    </p>
                </div>
            </div>
            <div className="mt-10">
                <SearchBar />
            </div>
            <div className="mt-5 md:mt-10">
                <Statistics />
            </div>
        </div>
    );
};

export default HomePage;
