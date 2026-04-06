import React, { useState, useEffect } from "react";

const Reviews = ({ variant, isDark }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Запит на сервер для отримання коментарів за номером варіанту
    fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error("Помилка завантаження відгуків:", err));
  }, [variant]);

  return (
    <section className="mb-10">
      <h2 className={`text-2xl font-bold mb-5 border-l-4 border-emerald-500 pl-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Reviews from Employers
      </h2>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className={`p-4 rounded-xl border-l-4 border-emerald-500 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <p className="text-xs font-bold text-emerald-400">{comment.email}</p>
            <p className={`text-sm italic mt-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
              "{comment.body}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;