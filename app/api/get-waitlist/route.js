import { NextResponse } from "next/server";
import PodcastCreator from "@/models/PodcastCreator";
import dbConnect from "@/app/utils/mongoose";

export async function POST(req){
    const {username} = await req.json()
    try{
        await dbConnect();

        const waitlistData = await PodcastCreator.findOne({username});
        return NextResponse.json({success:true, data:waitlistData});
    } catch (error){
        return NextResponse.json({success:false, error: "Cannot get waitlist Data..."});
    }
}