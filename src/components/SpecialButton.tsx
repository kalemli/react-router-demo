import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";

export const SpecialButton = withRouter(({ history }) => {
  const postId = 5;
  return (
    <Button
      color="primary"
      style={{ textTransform: "capitalize" }}
      onClick={() => {
        history.push(`/post/${postId}`);
      }}
    >
      Go to post 5
    </Button>
  );
});
