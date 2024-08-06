import { NextResponse } from "next/server";
import Podcast from  "@/models/Podcast"; 
import dbConnect from "@/app/utils/mongoose";

export const dynamic = "force-dynamic";

export async function POST(req) {
    const {category} = await req.json();
    console.log(category);
    try{
        await dbConnect();
        const category_podcast = await Podcast.find({podcast_category:category},{podcast_audio:0});
        return NextResponse.json({category_podcast});
    }catch(e){
        console.log(e);
        return NextResponse.json({"error":e});
    }
}