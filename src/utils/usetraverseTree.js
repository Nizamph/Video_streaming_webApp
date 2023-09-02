import profilPic from '../youtubeIcons/propicRandom.png';
const useTraverseTree = () => {
  function insertNode(tree, commentId, newComment) {
    if (!tree) {
      return [];
    }

    let copiedTree = JSON.parse(JSON.stringify(tree));

    copiedTree.forEach((itm) => {
      if (itm.id === commentId) {
        itm.replies.unshift({
          id: new Date().getTime(),
          name: 'User',
          url: profilPic,
          comment: newComment,
          replies: [],
        });
      } else {
        if (itm.replies) {
          itm.replies = insertNode(itm.replies, commentId, newComment); // Recurse into replies
        }
      }
    });

    return copiedTree;
  }

  function deleteNode(tree, commentId) {
    if (!tree) {
      return [];
    }
    let copiedTree = structuredClone(tree);

    copiedTree = copiedTree.filter((cmnt) => {
      if (cmnt.id === commentId) {
        return false;
      } else if (cmnt.replies) {
        cmnt.replies = deleteNode(cmnt.replies, commentId);
      }
      return true;
    });
    return copiedTree;
  }

  function editNode(tree, commentId, newComment) {
    if (!tree) return [];
    let copiedTree = structuredClone(tree);
    copiedTree = copiedTree.map((cmnt) => {
      if (cmnt.id === commentId) {
        cmnt = { ...cmnt, comment: newComment };
      } else if (cmnt.replies) {
        cmnt.replies = editNode(cmnt.replies, commentId, newComment);
      }
      return cmnt;
    });
    return copiedTree;
  }
  return { insertNode, deleteNode, editNode };
};

export default useTraverseTree;
