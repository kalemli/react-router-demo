import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { MenuItem, AppBar, IconButton, Menu, Toolbar } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const ITEM_HEIGHT = 48;

export const NavBar = withRouter(({ history }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          color="inherit"
          edge="start"
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            setAnchorEl(event.currentTarget);
          }}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={() => {
            setAnchorEl(null);
          }}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200
            }
          }}
        >
          <MenuItem
            onClick={() => {
              history.push("/");
              setAnchorEl(null);
            }}
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={() => {
              history.push("/post/3");
              setAnchorEl(null);
            }}
          >
            Posts
          </MenuItem>
          <MenuItem
            onClick={() => {
              history.push("/about");
              setAnchorEl(null);
            }}
          >
            About
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
});
