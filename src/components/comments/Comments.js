import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../../youtubeIcons/profile-dp.jpg";
import threeDots from "../../youtubeIcons/menu.png";
import SmallVersionCommentInputHandler from "../UI/SmallVersionCommentInputHandler";
import CommentManage from "./CommentManage";
import CommentCautionModal from "./CommentCautionModal";
import useTraverseTree from "../../utils/usetraverseTree";
import { setEditDetails } from "../../reduxStore/commentSlice";
import upArrow from "../../youtubeIcons/upperArrow.png";
import downArrow from "../../youtubeIcons/downArrow.png";
import LikeButton from "../../youtubeIcons/like.png";
import Dislike from "../../youtubeIcons/dislike.png";

const Comments = ({ comment, handleInsertNode, editInputComment }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [showCommentManage, setShowCommentManage] = useState(false);
  const [showCommentDetails, setshowCommentDetails] = useState(true);
  const [isCommentFocussed, setIsCommentFocused] = useState(false);
  const [disable, setDisable] = useState(true);
  const [typeComment, setTypeComment] = useState("");
  const [impressionCount, setImpressionCount] = useState({
    likeCount: 0,
    dislikeCount: 0,
  });

  const { editNode } = useTraverseTree();
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setTypeComment(e.target.value);
  };

  useEffect(() => {
    if (typeComment.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [typeComment]);

  const commentSubmitHandler = () => {
    handleInsertNode(comment.id, commentText);
    setShowInput(false);
    setShowReplies(true);
  };

  const catchCommentHandler = (comment) => {
    setCommentText(comment);
  };

  useEffect(() => {
    if (comment?.id === "2000") {
      setShowReplies(true);
    }
  }, [comment]);

  const editCommentHandler = () => {
    setshowCommentDetails(false);
    setTypeComment(comment?.comment);
  };

  const editSubmitHandler = () => {
    setshowCommentDetails(true);
    dispatch(setEditDetails({ commentId: comment?.id, comment: typeComment }));
  };

  return (
    <div className="bg-gray-800 p-4 mt-6 rounded-lg shadow-lg mb-4">
      <div
        className=""
        onClick={(e) => {
          setShowCommentManage(false);
          e.stopPropagation();
        }}
      >
        {/* Comment Header */}
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <img
              alt="proPic"
              src={comment?.url || Profile}
              className="w-10 h-10 rounded-full border-2 border-blue-500"
            />
            {showCommentDetails ? (
              <div>
                <p className="font-semibold text-white">{comment?.name}</p>
                <p className="text-gray-300">{comment?.comment}</p>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  className={`border-b-2 pl-2 bg-transparent text-white focus:outline-none focus:border-blue-500 w-[60%]`}
                  placeholder="Type a comment..."
                  value={typeComment}
                  onChange={onChangeHandler}
                  onFocus={() => setIsCommentFocused(true)}
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="px-3 py-1 text-sm text-gray-300 hover:text-white transition-colors"
                    onClick={() => setshowCommentDetails(true)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    disabled={disable}
                    className={`px-3 py-1 text-sm rounded-full ${
                      disable
                        ? "bg-gray-700 text-gray-400"
                        : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    } transition-all`}
                    onClick={editSubmitHandler}
                  >
                    Reply
                  </button>
                </div>
              </>
            )}
          </div>
          {comment?.name === "User" && (
            <div className="relative">
              <button
                className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowCommentManage((prevState) => !prevState);
                }}
              >
                {/* Dropdown Icon with Theme Color */}
                <img
                  alt="menu"
                  src={threeDots}
                  className="w-6 filter invert brightness-0 saturate-100 sepia-0 hue-rotate-180"
                />
              </button>
              {showCommentManage && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-10">
                  <CommentManage
                    commentId={comment?.id}
                    commentEditHandler={editCommentHandler}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Comment Actions */}
        {showCommentDetails && (
          <div className="flex flex-col justify-start mt-2">
            <div className="flex items-center gap-4">
              {/* Like Button with Theme Color */}
              <button
                className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition-colors"
                onClick={() =>
                  setImpressionCount((prevState) => ({
                    ...prevState,
                    likeCount: prevState.likeCount + 1,
                  }))
                }
              >
                <img
                  alt="like"
                  src={LikeButton}
                  className="w-5 filter invert brightness-0 saturate-100 sepia-0 hue-rotate-180"
                />
                <span>{impressionCount.likeCount}</span>
              </button>

              {/* Dislike Button with Theme Color */}
              <button
                className="flex items-center gap-1 text-gray-300 hover:text-purple-400 transition-colors"
                onClick={() =>
                  setImpressionCount((prevState) => ({
                    ...prevState,
                    dislikeCount: prevState.dislikeCount + 1,
                  }))
                }
              >
                <img
                  alt="dislike"
                  src={Dislike}
                  className="w-5 filter invert brightness-0 saturate-100 sepia-0 hue-rotate-180"
                />
                <span>{impressionCount.dislikeCount}</span>
              </button>

              <button
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setShowInput(true)}
              >
                Reply
              </button>
            </div>

            {/* Replies Section */}
            {comment?.replies?.length > 0 && (
              <div className="mt-2">
                <button
                  className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                  onClick={() => setShowReplies((prevState) => !prevState)}
                >
                  {/* Dropdown Arrow with Theme Color */}
                  <img
                    alt="arrow"
                    src={showReplies ? upArrow : downArrow}
                    className="w-4 filter invert brightness-0 saturate-100 sepia-0 hue-rotate-180"
                  />
                  <span className="text-sm">
                    {comment.replies.length} {showReplies ? "Hide" : "Show"}{" "}
                    Replies
                  </span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Reply Input */}
      <SmallVersionCommentInputHandler
        showInput={showInput}
        setShowInput={setShowInput}
        commentSubmitHandler={commentSubmitHandler}
        catchComment={catchCommentHandler}
      />

      {/* Nested Replies */}
      {showReplies && (
        <div className="ml-6 pl-4 border-l-2 border-gray-700">
          {comment?.replies?.map((reply) => (
            <Comments
              key={reply.id}
              handleInsertNode={handleInsertNode}
              comment={reply}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
