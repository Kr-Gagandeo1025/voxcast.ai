import { NextResponse } from "next/server";
import dbConnect from "../../utils/mongoose";
import Podcast from "@/models/Podcast";

export async function POST(req){
    const { 
        username,
        email,
        podcast_title,
        podcast_story,
        podcast_audio,
        podcast_thumbnail,
    } = await req.json();

    try{
        await dbConnect();

        const newPodcast = new Podcast({
            username:username,
            email:email,
            podcast_title:podcast_title,
            podcast_story:podcast_story,
            podcast_audio:podcast_audio,
            podcast_thumbnail:podcast_thumbnail,
        });
        await newPodcast.save();
        return NextResponse.json({message:'Podcast Upload success',id:newPodcast._id});

    }catch(error){
        console.error("upload error",error);
        return NextResponse.json({error: "Error uploading podcast"});
    }
}

export const config = {
    api:{
        bodyParser:true,
    },
};