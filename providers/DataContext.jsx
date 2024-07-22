'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from "@clerk/nextjs";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({children}) =>{
    const {user} = useUser();
    const username = user?.username;
    const [podcastData, setPodcastData] = useState(null);
    const [newRelease,setNewRelease] = useState(null);
    const [voxcoins,setVoxcoins] = useState(0);

    useEffect(()=>{
        const fetchPodcasts = async () => {
            try {
                const response = await fetch(`/api/get-podcast`,{
                    method:"GET",
                    cache: 'no-store',
                    next:{
                        revalidate:0,
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch podcasts');
                }
                const data = await response.json();
                setPodcastData(data.trending_podcasts);
                setNewRelease(data.new_release);
                console.log(podcasts)
            } catch (error) {
                console.error('Error fetching podcasts:', error);
        
            }
        };
        const getVoxcoins = async () =>{
            const response = await fetch("/api/get-user-balance",{
              method:"POST",
              headers:{
                "Content-Type":"application/json",
              },
              body:JSON.stringify({username}),
            })
            const result = await response.json();
            setVoxcoins(result.voxcoins_data[0]?result.voxcoins_data[0].voxcoins:0);
        }

        fetchPodcasts();
        getVoxcoins();
    },[username]);

    return (
        <DataContext.Provider value={{ podcastData,newRelease,voxcoins, setPodcastData, setNewRelease, setVoxcoins }}>
          {children}
        </DataContext.Provider>
      );
}