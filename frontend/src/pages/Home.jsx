import bgVideo from "../../public/videos/bg-video.mp4";
import SearchBar from "../components/SearchBar";
import Statistics from "../components/Statistics";
const Home = () => {
    return (
        <div className="section-container h-[calc(100vh-5rem)]">
            <div className="relative">
                <video
                    autoPlay
                    loop
                    muted
                    className="h-72 w-full rounded-2xl object-cover brightness-75 shadow-md"
                >
                    <source src={bgVideo} type="video/mp4" />
                </video>
                <div className="w-3/4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-4">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white/80">
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p className="text-sm sm:text-lg md:text-xl text-white/80">
                        Discover the best properties in your area and make your
                        dream home a reality.
                    </p>
                </div>
            </div>
            <div className="mt-10">
                <SearchBar />
            </div>
            <div className="mt-10">
                <Statistics />
            </div>
        </div>
    );
};

export default Home;
