import { NextResponse } from "next/server";
import dbConnect from "@/app/utils/mongoose";
import PodcastCreator from "@/models/PodcastCreator";

export async function POST(req){
    const {
        fullname,
        username,
        emailId,
    } = await req.json();

    try{
        await dbConnect();

        const newPodcastCreator = new PodcastCreator({
            fullname:fullname,
            username:username,
            emailId:emailId,
        });
        await newPodcastCreator.save();
        return NextResponse.json({message:"Waitlist Joined Successfully !",id:newPodcastCreator._id});

    }catch(error){
        console.error("joining error",error);
        return NextResponse.json({error: "Waitlist Joining Failed! Try Again !"});
    }
}