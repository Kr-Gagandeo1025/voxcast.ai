import { NextResponse } from "next/server";
import Podcast from  "@/models/Podcast"; 
import dbConnect from "@/app/utils/mongoose";

export const dynamic = "force-dynamic";

export async function POST(req) {
    const {keyword} = await req.json();
    console.log(keyword);
    try{
        await dbConnect();
        const pipeline = [
            {
                $search: {
                index: "searchPodcasts",
                text: {
                    query: keyword,
                    path: {
                    wildcard: "*"
                    }
                }
                }
            }
        ]
        const search_result = await Podcast.aggregate(pipeline).limit(4);
        return NextResponse.json({search_result});
    }catch(e){
        console.log(e);
        return NextResponse.json({"error":e});
    }
}