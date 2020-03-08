import React from "react";
import { withRouter } from "react-router-dom";

export const SpecialButton = withRouter(({ history }) => {
  const postId = 5;
  return (
    <button
      onClick={() => {
        history.push(`/post/${postId}`);
      }}
    >
      Go to post 5
    </button>
  );
});
