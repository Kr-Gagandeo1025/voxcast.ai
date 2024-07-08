import { NextResponse } from "next/server";
import Podcast from  "@/models/Podcast"; 
import dbConnect from "@/app/utils/mongoose";

export async function POST(req) {
    const {podcast_id} = await req.json();
    try {
      await dbConnect();
      const podcast_audio = await Podcast.find({"_id":podcast_id});
  
      return NextResponse.json({ podcast_audio });
    } catch (error) {
      console.error('Error fetching podcast audio:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }