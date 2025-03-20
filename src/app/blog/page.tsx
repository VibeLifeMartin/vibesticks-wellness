"use client";
import { useState } from "react";

export default function BlogPage() {
  const [topic, setTopic] = useState("");
  const [blogContent, setBlogContent] = useState("");

  async function fetchAIContent() {
    if (!topic) return;

    try {
      const response = await fetch("/api/generateBlog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: topic }),
      });

      const data = await response.json();

      if (response.ok) {
        setBlogContent(data.text);
      } else {
        throw new Error(data.error || "Failed to generate content");
      }
    } catch (error) {
      console.error("Error generating content:", error);
      setBlogContent("Failed to generate content.");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-6">
      <h1 className="text-4xl font-bold">AI-Powered Blog 📝</h1>
      <p className="mt-2 text-gray-600">Enter a topic, and let AI generate a fresh blog post!</p>
      <div className="mt-6 flex space-x-4">
        <input
          type="text"
          placeholder="Enter topic..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="px-4 py-2 border rounded-md shadow-md text-black"
        />
        <button
          onClick={fetchAIContent}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Generate
        </button>
      </div>
      {blogContent && (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Generated Content</h2>
          <p className="mt-2 text-gray-700">{blogContent}</p>
        </div>
      )}
    </div>
  );
}