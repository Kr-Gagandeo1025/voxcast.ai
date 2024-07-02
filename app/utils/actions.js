// open ai imports and inits/rules
import OpenAI from "openai";
const openai = new OpenAI({apiKey:process.env.NEXT_PUBLIC_OPENAI_API_KEY,dangerouslyAllowBrowser: true });


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
    const genResult = await model.generateContent(storyPrompt+". If this seems like a topic then generate a podcast for this or else try to complete it like a podcast story. Do not include roles and music mentions. Should be less than equals to 2000 characters with spaces.");
    const response = await genResult.response;
    const text = response.text();
    return(text);
}

// get thumbnail OPENAI
export async function getThumbnail(podcastTitle){
    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: podcastTitle,
        n: 1,
        response_format:"b64_json"
      });
      return response.data[0];
}

// get ai audio generated
export async function getAIAudio(podcastStory,SelectedVoice){
  const response = await openai.audio.speech.create({
    model:"tts-1",
    voice:SelectedVoice,
    input: podcastStory
  })
  const audioBuffer = await response.arrayBuffer();
  const base64_audio = Buffer.from(audioBuffer).toString("base64");
  return base64_audio;

}