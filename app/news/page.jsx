"use client";

import { useEffect, useState } from "react";

export default function NewsPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=${apiKey}`
        );

        const data = await res.json();
        setArticles(data.articles || []);
      } catch (err) {
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6 flex items-center gap-2">
        📈 Finance News
      </h1>

      {loading ? (
        <p className="text-gray-500">Loading news...</p>
      ) : articles.length === 0 ? (
        <p className="text-gray-500">
          No articles found or API key might be invalid.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition"
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="rounded-lg mb-3 w-full h-40 object-cover"
                />
              )}
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                {article.description || "No description available."}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
