import Anthropic from "@anthropic-ai/sdk"
import { InferenceClient } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

const anthropic = new Anthropic({
    apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
    dangerouslyAllowBrowser: true,
})

export async function getRecipeFromChefClaude(ingredientsArr: string[]) {
    const ingredientsString = ingredientsArr.join(", ")

    const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
        ],
    });
    return (msg.content[0] as any).text
}


const client = new InferenceClient(import.meta.env.VITE_HF_ACCESS_TOKEN)

export async function getRecipeFromMistral(ingredientsArr: string[]) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await client.textGeneration({
            model: "microsoft/DialoGPT-medium",
            inputs: `
            ${SYSTEM_PROMPT}
            ${ingredientsString}
            Please give me a recipe you'd recommend I make!
            `,
            max_new_tokens: 1024,
        })
        return response.generated_text
    } catch (err: any) {
        console.error("Recipe generation error:", err.message)
        throw new Error(`Failed to generate recipe: ${err.message}`)
    }
}