const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({
    apiKey: apiKey,
});

const tools = [
    {
        googleSearch: {},
    },
];

const generationConfig = {
    temperature: 1,
    maxOutputTokens: 65536,
    topP: 0.95,
};

async function runChat(prompt) {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                tools,
                ...generationConfig,
            },
        });

        console.log(response.text);
        return response.text;
    } catch (error) {
        console.error(error);
    }
}

export default runChat;

