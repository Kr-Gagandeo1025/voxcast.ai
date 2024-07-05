import mongoose from "mongoose";

const PodcastCreatorSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
    },
    emailId:{
        type:String,
        required:true,
    },
    voxcoins:{
        type:Number,
        default:50,
    }
})

const PodcastCreator = mongoose.models.PodcastCreator || mongoose.model('PodcastCreator',PodcastCreatorSchema,'vx_waitlist');
export default PodcastCreator;