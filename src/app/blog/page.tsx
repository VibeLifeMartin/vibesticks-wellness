"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BlogPage() {
  const [topic, setTopic] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to fetch AI-generated content
  const fetchAIContent = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setBlogContent(""); // Clear previous content

    try {
      const response = await fetch("/api/generateBlog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: topic }),
      });

      const data = await response.json();
      console.log("API response data:", data); // Debugging log

      if (response.ok) {
        setBlogContent(data.text || "No content generated");
      } else {
        setBlogContent(`Error: ${data.error || "Failed to generate content"}`);
      }
    } catch (error) {
      console.error("Error fetching AI content:", error);
      setBlogContent("Error generating content.");
    }
    setLoading(false);
  };

  // Function to copy content to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(blogContent);
    alert("Copied to clipboard!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-gray-900 flex items-center space-x-2"
      >
        <span>AI-Powered Blog</span> <span>📝</span>
      </motion.h1>
      <p className="text-gray-600 mt-2 text-center">
        Enter a topic, and let AI generate a fresh blog post!
      </p>

      <div className="mt-6 flex space-x-2">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400 outline-none w-72"
          placeholder="Enter blog topic..."
        />
        <button
          onClick={fetchAIContent}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      {blogContent && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 p-6 bg-white rounded-lg shadow-md w-full max-w-3xl text-gray-800 leading-relaxed"
        >
          <h2 className="text-3xl font-bold text-primary">✨ Your AI-Generated Blog</h2>
          <p className="mt-2 text-lg">{blogContent}</p>

          <div className="mt-4 flex justify-end">
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition flex items-center space-x-2"
            >
              📋 <span>Copy to Clipboard</span>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}