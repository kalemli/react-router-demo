import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { SpecialButton } from "./SpecialButton";

interface Props extends RouteComponentProps {}

export const Home: React.FC<Props> = ({ history }) => {
  return (
    <div>
      <h3>Home</h3>
      <Link to="/about">About</Link>
      <br />
      <button
        onClick={() => {
          history.push("/about");
        }}
      >
        Click to go to About
      </button>
      <SpecialButton />
    </div>
  );
};
