import mongoose from "mongoose";

const PodcastSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    podcast_title:{
        type:String,
        required:true,
    },
    podcast_story:{
        type:String,
        required:true,
    },
    podcast_audio:{
        type:String,
        required: true,
    },
    podcast_thumbnail:{
        type:String,
        required: false,
    },
    podcast_category:{
        type:String,
        required: true,
    },
    createdAt: {
        type:Date,
        default: Date.now,
    },
    plays:{
        type:Number,
        default:0,
    }
});

const Podcast = mongoose.models.Podcast || mongoose.model('Podcast',PodcastSchema,'podcasts_data');
export default Podcast;