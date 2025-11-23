import React, { useState, useEffect } from "react";

/** @typedef {{imageUrl?: string, imageAlt?: string, title?: string, content?: string}} Post */
/** @param {{posts: Post[]}} props */
export default function PopUp({ posts = [] }) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const open = (post) => { setSelectedPost(post); setShowPopup(true); };
  const close = () => { setShowPopup(false); setSelectedPost(null); };

  // lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";
  }, [showPopup]);

  return (
    <div className="grid grid-cols-2 gap-4 p-4 max-w-4xl justify-items-center w-full">
      {posts.map((post, i) => (
        <button
          key={post.title ?? i}
          onClick={() => open(post)}
          className="w-full max-w-[260px] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
        >
          {post.imageUrl ? (
            <img
              src={post.imageUrl}
              alt={post.imageAlt || post.title || "image"}
              className="w-full h-40 object-cover"
            />
          ) : (
            <div className="w-full h-40 bg-gray-200" />
          )}
          <div className="bg-red-500 text-white px-3 py-2 text-sm font-medium">
            {post.title}
          </div>
        </button>
      ))}

      {showPopup && selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={close} />
          <div className="relative z-10 w-[90vw] max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto">
            <div className="sticky top-0 flex items-center justify-between px-5 py-3 border-b bg-white">
              <h2 className="text-lg font-semibold">{selectedPost.title}</h2>
              <button onClick={close} className="p-2 rounded-lg hover:bg-gray-100" aria-label="Close">✕</button>
            </div>
            <div className="p-5 whitespace-pre-wrap">{selectedPost.content}</div>
          </div>
        </div>
      )}
    </div>
  );
}
