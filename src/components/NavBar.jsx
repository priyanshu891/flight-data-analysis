import { Toolbar, Typography, AppBar } from "@material-ui/core";
import React from "react";

const NavBar = (props) => {
  return (
    <div>
      <AppBar position={props.position} className={props.style}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {props.children}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
