import { useState, useEffect } from "react";

const Commentform = () => {
  const [comment, setComment] = useState({ name: "", comment: "" });
  const [comments, setComments] = useState([]);

  // Load comments from localStorage on component mount
  useEffect(() => {
    const savedComments = localStorage.getItem('portfolioComments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  const hanileInputs = (e) => {
    const { name, value } = e.target;
    setComment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handileSubmit = async (e) => {
    e.preventDefault();
    
    // Create new comment object with timestamp
    const newComment = {
      id: Date.now(),
      name: comment.name,
      comment: comment.comment,
      timestamp: new Date().toLocaleString()
    };

    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem('portfolioComments', JSON.stringify(updatedComments));
    setComment({ name: "", comment: "" });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 ">
      {/* Comment Form */}
      <div className="bg-white/10 p-6 rounded-xl shadow-lg text-white">
        <h2 className="text-2xl font-semibold text-purple-400 mb-2">
          Leave a Comment
        </h2>

        <form className="space-y-2" onSubmit={handileSubmit}>
          <div>
            <label htmlFor="commentName" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="commentName"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-2 rounded bg-white/10 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={hanileInputs}
              value={comment.name}
              required
            />
          </div>

          <div>
            <label htmlFor="commentText" className="block mb-1">
              Comment
            </label>
            <textarea
              id="commentText"
              name="comment"
              rows="4"
              placeholder="Write your comment..."
              className="w-full px-4 py-2 rounded bg-white/10 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={hanileInputs}
              value={comment.comment}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition"
          >
            Post Comment
          </button>
        </form>
      </div>

      {/* Comments Display */}
      <div className="bg-white/10 p-6 rounded-xl shadow-lg text-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-purple-400">
            Comments ({comments.length})
          </h3>
         
        </div>

        {comments.length === 0 ? (
          <p className="text-gray-400 text-center py-8">
            give me a complement!
          </p>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {comments.map((commentItem) => (
              <div key={commentItem.id} className="bg-white/5 p-4 rounded-lg border border-gray-600">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-purple-300">{commentItem.name}</h4>
                  <span className="text-xs text-gray-400">{commentItem.timestamp}</span>
                </div>
                <p className="text-gray-200">{commentItem.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Commentform;
