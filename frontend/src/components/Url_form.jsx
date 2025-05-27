import React, { useState } from "react";
import axios from "axios";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ShortUrlApi } from "../api/ShortUrl.api";

export default function UrlForm() {
  // Access the client
  // const queryClient = useQueryClient();
  // Queries
  // const query = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  const [url, setUrl] = useState("");
  const [shortURL, setShortURL] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ShortUrlApi(url);
      setShortURL(response.data.shortURL);
    } catch (err) {
      console.error(err);
      setShortURL("Error generating URL");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">URL Shortener</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your long URL here"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Shorten URL
          </button>
        </form>
        <div className="mt-6 p-4 border border-gray-300 rounded bg-gray-50">
          <p className="font-medium mb-2">Shortened URL:</p>
          <div className="truncate break-all">
            {shortURL || "Your shortened URL will appear here"}
          </div>
        </div>
      </div>
    </div>
  );
}
