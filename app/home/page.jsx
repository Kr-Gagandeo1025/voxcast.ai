'use client'
import PodcastCard from "@/components/PodcastCard";
import SidePanel from "@/components/SidePanel";
import PodcastPlayer from "@/components/PodcastPlayer";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import HomeTopBar from "@/components/HomeTopBar";
import ContinuePlaying from "@/components/ContinuePlaying";
import { useAudioPlayer } from "@/providers/AudioPlayerContext";
import { useData } from "@/providers/DataContext";

const Home = () => {
    const { podcastData, newRelease } = useData();
    const [playingPodcastData, setPlayingPodcastData] = useState(null);
    const [sideBarState, setSideBarState] = useState("hidden");
    const { isTrackPlaying, setPlayerData, setIsTrackPlaying } = useAudioPlayer();
    const [recentPodcasts, setRecentPodcasts] = useState([]);

    // Load recent podcasts from localStorage
    useEffect(() => {
        const storedPodcasts = JSON.parse(localStorage.getItem('recentPodcasts')) || [];
        console.log("Loaded recentPodcasts from localStorage:", storedPodcasts); // Browser console
        setRecentPodcasts(storedPodcasts);
    }, []);
    
    const setPlayer = async (id, title, username, plays, thumbnail) => {
        console.log("Setting player for podcast ID:", id);
        setPlayerData(null);
        setPlayingPodcastData(null);
        setIsTrackPlaying(true);
        try {
            const response = await fetch('/api/get-podcast-audio', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    podcast_id: id,
                })
            });
            if (response.ok) {
                const result = await response.json();
                const base64_audio = result.podcast_audio[0].podcast_audio;
                const podcastData = {
                    id: id,
                    title: title,
                    audio: base64_audio,
                    author: username,
                    plays: plays,
                    thumbnail: thumbnail,
                };
                console.log("Fetched podcast data:", podcastData);
                setPlayingPodcastData(podcastData);
                setPlayerData(podcastData);
    
                // Save metadata to local storage
                const podcastMetadata = {
                    id: id,
                    title: title,
                    author: username,
                    plays: plays
                };
                let recentPodcasts = JSON.parse(localStorage.getItem('recentPodcasts')) || [];
                recentPodcasts = recentPodcasts.filter(podcast => podcast.id !== id); // Remove any existing entry with the same id
                recentPodcasts.unshift(podcastMetadata); // Add new entry to the beginning
                if (recentPodcasts.length > 5) recentPodcasts.pop(); // Keep only the latest 5
                localStorage.setItem('recentPodcasts', JSON.stringify(recentPodcasts));
                console.log("Updated recentPodcasts in localStorage:", recentPodcasts); // Browser console
                setRecentPodcasts(recentPodcasts);
            } else {
                toast.error('Audio Not Found...!');
            }
        } catch (e) {
            toast.error("Cannot get audio at the moment :(");
            console.log(e);
        }
    
        try {
            const response = await fetch("/api/play-count", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                })
            });
            console.log("Play count response:", response); // Browser console
            if (response.status === 200) {
                console.log("Play count success"); // Browser console
            } else {
                console.log("Play count failed"); // Browser console
            }
        } catch (e) {
            console.log(e);
        }
    };
    
    const handleSideBarState = () => {
        setSideBarState(sideBarState === "hidden" ? "flex" : "hidden");
    };

    return (
        <main className="h-screen flex max-w-screen md:p-4 p-1">
            <Toaster />
            <SidePanel state={sideBarState} page={"home"} />
            <div className="flex flex-col w-full">
                <HomeTopBar actionbtn={handleSideBarState} sidebarState={sideBarState} />
                <div className="flex flex-col overflow-y-scroll h-screen no-scrollbar w-full">
                    <div className="mt-6 bg-lime-100 w-full rounded-2xl p-4">
                        <span className="xl:text-3xl text-2xl flex justify-between items-baseline font-bold">Catch where you left</span>
                        <div className="flex w-full overflow-x-scroll gap-2 items-center">
                            {console.log("Rendering recentPodcasts:", recentPodcasts)} {/* Browser console */}
                            {recentPodcasts.length > 0 ? recentPodcasts.map((podcast, index) => (
                                <ContinuePlaying
                                    key={podcast.id} // Use unique id for key
                                    title={podcast.title}
                                    author={podcast.author}
                                    onClick={() => setPlayer(podcast.id, podcast.title, podcast.author, podcast.plays)}
                                />
                            )) : <span className="text-xl text-gray-500">No recently played podcasts.</span>}
                            <div className="flex gap-8 pl-6 ml-2 border-l-1 border-black">
                                
                            </div>
                        </div>
                    </div>
                    {podcastData && newRelease ? <div className="h-full">
                        <div className="mt-6 p-4 bg-lime-100 rounded-2xl">
                            <span className="xl:text-3xl text-2xl flex justify-between items-baseline font-bold">Trending </span>
                            <div className="my-2 flex overflow-x-scroll gap-4 items-end">
                                {podcastData?.map((pd) => (
                                    <div key={pd._id} onClick={() => setPlayer(pd._id, pd.podcast_title, pd.username, pd.plays,pd.podcast_thumbnail)}>
                                        <PodcastCard
                                            id={pd._id}
                                            title={pd.podcast_title}
                                            author={pd.username}
                                            plays={pd.plays}
                                            thumbnail={pd.podcast_thumbnail}
                                            category={pd.podcast_category}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-lime-100 rounded-2xl">
                            <span className="xl:text-3xl text-2xl ml-2 flex justify-between items-baseline font-bold">New Release </span>
                            <div className="my-2 flex gap-4 overflow-x-scroll items-end">
                                {newRelease?.map((pd) => (
                                    <div key={pd._id} onClick={() => setPlayer(pd._id, pd.podcast_title, pd.username, pd.plays, pd.podcast_thumbnail)}>
                                        <PodcastCard
                                            id={pd._id}
                                            title={pd.podcast_title}
                                            author={pd.username}
                                            plays={pd.plays}
                                            thumbnail={pd.podcast_thumbnail}
                                            category={pd.podcast_category}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div> : <div className="flex h-full items-center justify-center text-xl"><CgSpinner className="animate-spin" /></div>}
                </div>
                {isTrackPlaying &&
                    <PodcastPlayer />
                }
            </div>
        </main>
    );
}

export default Home;
