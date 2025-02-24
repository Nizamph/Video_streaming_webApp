import { useState, useEffect } from "react";
import displayPic from "../../youtubeIcons/profile-dp.jpg";
import proPic from "../../youtubeIcons/propicRandom.png";

const CommentInputHandler = ({ getCommentText }) => {
  const [disable, setDisable] = useState(true);
  const [isCommentFocussed, setIsCommentFocused] = useState(false);
  const [typeComment, setTypeComment] = useState("");

  useEffect(() => {
    if (typeComment.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [typeComment]);

  const commentSubmitHandler = () => {
    getCommentText(typeComment);
    setTypeComment("");
    setIsCommentFocused(false);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      {/* Input Field */}
      <div className="flex items-center gap-3">
        <img
          src={proPic}
          alt="dp"
          className="w-10 h-10 rounded-full border-2 border-blue-500"
        />
        <input
          type="text"
          value={typeComment}
          className={`flex-1 p-2 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          placeholder="Type a comment..."
          onChange={(e) => setTypeComment(e.target.value)}
          onFocus={() => setIsCommentFocused(true)}
        />
      </div>

      {/* Action Buttons */}
      {isCommentFocussed && (
        <div className="flex justify-end gap-2 mt-2">
          <button
            type="button"
            className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsCommentFocused(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={disable}
            onClick={commentSubmitHandler}
            className={`px-4 py-2 text-sm rounded-full transition-all ${
              disable
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90"
            }`}
          >
            Comment
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentInputHandler;
