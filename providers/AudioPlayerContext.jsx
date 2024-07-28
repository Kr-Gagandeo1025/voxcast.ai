"use client"
import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const AudioPlayerContext = createContext();

export const useAudioPlayer = () => useContext(AudioPlayerContext);

export const AudioPlayerProvider = ({children}) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);
    const [playerData, setPlayerData] = useState(null);
    const [isTrackPlaying, setIsTrackPlaying] = useState(false);

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if(isPlaying){
            audio.pause();
        }else{
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        const audio = audioRef.current;
        setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleSeek = (event) => {
        const audio = audioRef.current;
        const newTime = (event.target.value / 100) * audio.duration;
        audio.currentTime = newTime;
        setProgress(event.target.value);
    };
    
    const handleVolumeChange = (event) => {
        const audio = audioRef.current;
        const newVolume = event.target.value;
        audio.volume = newVolume;
        setVolume(newVolume);
    };
    const skipForward = () => {
        const audio = audioRef.current;
        audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);
        setProgress(progress+10);
    };

    const skipBackward = () => {
        const audio = audioRef.current;
        audio.currentTime = Math.max(audio.currentTime - 10, 0);
        setProgress(progress-10);
    };
    
    return (
        <AudioPlayerContext.Provider
          value={{
            isTrackPlaying,
            setIsTrackPlaying,
            audioRef,
            isPlaying,
            togglePlayPause,
            progress,
            handleSeek,
            volume,
            handleVolumeChange,
            skipForward,
            skipBackward,
            playerData,
            setPlayerData,
            handleTimeUpdate,
          }}
        >
            {children}
        </AudioPlayerContext.Provider>
    );
}