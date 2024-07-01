// open ai imports and inits/rules
// import OpenAI from "openai";
// const openai = new OpenAI({apiKey:process.env.NEXT_PUBLIC_OPENAI_API_KEY,dangerouslyAllowBrowser: true });


//gemini imports and rules
import { GoogleGenerativeAI,HarmCategory,HarmBlockThreshold } from "@google/generative-ai"
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
const safetySetting = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
  ];
  
const model = genAI.getGenerativeModel({model:"gemini-1.5-flash",safetySetting});

// gemini model func for podcast story generation
export async function getStory(storyPrompt){
    const genResult = await model.generateContent(storyPrompt+". If this seems like a topic then generate a podcast for this or else try to complete it like a podcast story. Dont include any music suggestions or background score just generate plain texts for the podcast");
    const response = await genResult.response;
    const text = response.text();
    return(text);
}

// get thumbnail OPENAI
// export async function getThumbnail(podcastTitle){
//     const response = await openai.images.generate({
//         model: "dall-e-3",
//         prompt: "podcast thumbnail for - "+podcastTitle,
//         n: 1,
//         response_format:"b64_json"
//       });
//       console.log(response.data[0]);
// } 

// // get thumbnail Limewire AI
// export async function getThumbnail(podcastTitle){
//     const resp = await fetch(
//         `https://api.limewire.com/api/image/generation`,
//         {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-Api-Version': 'v1',
//                 Accept: 'application/json',
//                 Authorization: `Bearer ${process.env.NEXT_PUBLIC_LIMEWIRE_KEY}`
//             },
//             body: JSON.stringify({
//                 prompt: `Thumbnail for podcast titled - ${podcastTitle}`,
//                 aspect_ratio: '1:1'
//             })
//         }
//     )
//     const data = await resp.json();
//     console.log(data);
// }