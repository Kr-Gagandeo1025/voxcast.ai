import { NextResponse } from "next/server";
import Podcast from  "@/models/Podcast"; 
import dbConnect from "@/app/utils/mongoose";

export async function GET(req) {
    try {
      await dbConnect();
      const podcasts = await Podcast.find({}, { podcast_audio: 0 });
      return NextResponse.json({ podcasts });
    } catch (error) {
      console.error('Error fetching podcasts:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }
export const revalidate = 0;