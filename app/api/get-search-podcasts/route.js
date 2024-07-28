import { NextResponse } from "next/server";
import Podcast from  "@/models/Podcast"; 
import dbConnect from "@/app/utils/mongoose";

export const dynamic = "force-dynamic";

export async function POST(req) {
    const {keyword} = await req.json();
    console.log(keyword);
    try{
        await dbConnect();
        // const search_result = await Podcast.aggregate([
        //     {
        //         $search:{
        //             "text":{
        //                 "path":"podcast_title",
        //                 "query":keyword,
        //                 "fuzzy":{
        //                     "maxEdits":2
        //                 }
        //             }
        //         }
        //     },{
        //         $project:{
        //             "_id":1,
        //             "podcast_title":1
        //         }
        //     }
        // ])
        const search_result = await Podcast.find({podcast_title:keyword},{podcast_audio:0});
        return NextResponse.json({search_result});
    }catch(e){
        console.log(e);
        return NextResponse.json({"error":e});
    }
}