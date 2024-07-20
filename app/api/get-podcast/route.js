import { NextResponse } from "next/server";
import Podcast from  "@/models/Podcast"; 
import dbConnect from "@/app/utils/mongoose";

export const dynamic = "force-dynamic";

export async function GET(req) {
    try {
      await dbConnect();
      const trending_podcasts = await Podcast.find({}, { podcast_audio: 0 }).sort({plays:-1}).limit(5);
      const new_release = await Podcast.find({},{podcast_audio:0}).sort({_id:-1}).limit(5);
      return NextResponse.json({ trending_podcasts ,new_release});
    } catch (error) {
      console.error('Error fetching podcasts:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }
export const revalidate = 0;