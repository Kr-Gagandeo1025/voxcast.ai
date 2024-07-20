import { NextResponse } from "next/server";
import Podcast from  "@/models/Podcast"; 
import dbConnect from "@/app/utils/mongoose";

export async function POST(req) {
    const {username} = await req.json()
    try {
      await dbConnect();
      const podcasts_data = await Podcast.find({"username":username}, { podcast_audio: 0 });
      return NextResponse.json({ podcasts_data });
    } catch (error) {
      console.error('Error fetching podcasts:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}