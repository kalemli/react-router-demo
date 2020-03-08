import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<{ id: string }> {}

export const Post: React.FC<Props> = ({ match }) => {
  return (
    <div>
      <h3>Post</h3>
      <h4>Id: {match.params.id}</h4>
      <Link to="/">Home</Link>
    </div>
  );
};
