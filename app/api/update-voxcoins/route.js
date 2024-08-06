import { NextResponse } from "next/server";
import PodcastCreator from "@/models/PodcastCreator";
import dbConnect from "@/app/utils/mongoose";

export async function POST(req){
    const {username,voxc} = await req.json();
    try{
        await dbConnect();
        const update_voxcoins = await PodcastCreator.updateOne({"username":username},{$set:{"voxcoins":voxc}});
        return NextResponse.json({status:200,message:"Voxcoins Updated"});
    }catch(e){
        console.error("error while updating voxcoins",e);
        return NextResponse.json({status:500,message:'Internal Server Error'});
    }
}