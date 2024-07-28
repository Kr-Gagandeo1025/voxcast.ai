import { NextResponse } from "next/server";
import dbConnect from "@/app/utils/mongoose";
import PodcastCreator from "@/models/PodcastCreator";

export async function POST(req) {
    const {username} = await req.json()
    try {
      await dbConnect();
      const voxcoins_data = await PodcastCreator.find({"username":username});
      return NextResponse.json({ voxcoins_data });
    } catch (error) {
      console.error('Error fetching voxcoins:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}