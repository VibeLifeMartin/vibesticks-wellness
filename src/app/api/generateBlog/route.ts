import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Parse the request body to get the prompt
    const { prompt } = await request.json();
    console.log("Prompt received:", prompt); // Debugging log

    // Check if prompt is provided
    if (!prompt) {
      return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
    }

    // Call the OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: `Write a blog post about: ${prompt}` }],
        max_tokens: 500,
      }),
    });

    const data = await response.json();
    console.log("OpenAI response:", data); // Debugging log

    if (!response.ok) {
      throw new Error(data.error?.message || "Failed to generate content");
    }

    // Extract the generated content from the response
    const generatedText = data.choices[0]?.message?.content?.trim() || "No response";

    // Return the generated content
    return NextResponse.json({ text: generatedText });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return NextResponse.json({ error: "Failed to generate content" }, { status: 500 });
  }
}