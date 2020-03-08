import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { SpecialButton } from "./SpecialButton";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  Avatar,
  CardContent
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";

interface Props extends RouteComponentProps {}

export const Home: React.FC<Props> = ({ history }) => {
  return (
    <Card>
      <CardHeader
        title="Home"
        avatar={<Avatar style={{ backgroundColor: red[500] }}>H</Avatar>}
      />
      <CardContent>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>
            <Link to="/about">About</Link>
          </Button>
          <Button
            color="primary"
            style={{ textTransform: "capitalize" }}
            onClick={() => {
              history.push("/about");
            }}
          >
            Click to go to About
          </Button>
          <SpecialButton />
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};
