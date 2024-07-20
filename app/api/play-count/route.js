import { NextResponse } from "next/server";
import Podcast from "@/models/Podcast";
import dbConnect from "@/app/utils/mongoose";

export async function POST(req){
    const {id} = await req.json();
    try{
        await dbConnect();
        const get_plays = await Podcast.find({"_id":id},{"plays":1});
        const current_plays = get_plays[0].plays;
        await Podcast.updateOne({"_id":id},{$set:{"plays":current_plays+1}});
        return NextResponse.json({status:200,message:"Play counted"})
    }catch(e){
        console.error("error updating plays",e);
        return NextResponse.json({status:500,message:'Internal Server Error'});
    }
}