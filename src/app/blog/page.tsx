"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-background p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-primary">AI-Powered Blog 📝</h1>
      <p className="mt-2 text-gray-600 text-lg">Enter a topic, and let AI generate a fresh blog post!</p>
      
      <div className="mt-6 flex space-x-4">
        <motion.input
          whileFocus={{ scale: 1.05 }}
          type="text"
          placeholder="Enter topic..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="px-4 py-2 border rounded-md shadow-md text-black"
        />
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={fetchAIContent}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Generate
        </motion.button>
      </div>

      {blogContent && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 p-6 bg-white rounded-lg shadow-md w-full max-w-3xl"
        >
          <h2 className="text-2xl font-semibold">Generated Content</h2>
          <p className="mt-2 text-gray-700">{blogContent}</p>
        </motion.div>
      )}
    </motion.div>
  );
}
