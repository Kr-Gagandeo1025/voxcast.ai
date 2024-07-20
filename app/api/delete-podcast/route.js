import { NextResponse } from "next/server";
import Podcast from  "@/models/Podcast"; 
import dbConnect from "@/app/utils/mongoose";

export async function POST(req){
    const {id} = await req.json();
    try{
        await dbConnect();
        const del_resp = await Podcast.deleteOne({_id:id});
        return NextResponse.json({"res":true,del_resp});
    }catch(e){
        return NextResponse.json({"res":false,"error":e,});
    }
}