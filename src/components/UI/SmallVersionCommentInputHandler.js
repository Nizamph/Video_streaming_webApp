import { useState, useEffect } from "react";
import displayPic from "../../youtubeIcons/propicRandom.png";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../reduxStore/commentSlice";
import useTraverseTree from "../../utils/usetraverseTree";

const SmallVersionCommentInputHandler = (props) => {
  const commentTextFromEdit = useSelector((store) => store.comment.commentText);
  const dispatch = useDispatch();
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

  useEffect(() => {
    props.catchComment(typeComment);
  }, [typeComment]);

  useEffect(() => {
    if (commentTextFromEdit.length > 0) {
      setTypeComment(commentTextFromEdit);
    }
  }, [commentTextFromEdit]);

  const onChangeHandler = (e) => {
    setTypeComment(e.target.value);
  };

  return (
    <>
      {props.showInput && (
        <div className="flex flex-col gap-2 p-4 bg-gray-800 rounded-lg shadow-lg">
          {/* Input Field */}
          <div className="flex items-center gap-3">
            <img
              src={displayPic}
              alt="dp"
              className="w-10 h-10 rounded-full border-2 border-blue-500"
            />
            <input
              type="text"
              className={`flex-1 p-2 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
              placeholder="Type a comment..."
              value={typeComment}
              onChange={onChangeHandler}
              onFocus={() => setIsCommentFocused(true)}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
              onClick={() => props.setShowInput(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={disable}
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                disable
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90"
              }`}
              onClick={props.commentSubmitHandler}
            >
              Comment
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SmallVersionCommentInputHandler;
