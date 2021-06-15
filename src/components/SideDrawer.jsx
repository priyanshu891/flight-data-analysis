import React from "react";
import { Divider, Toolbar } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import SideBarItems from "./SideBarItems";

const SideDrawer = ({ items, styles, variant }) => {
  return (
    <Drawer
      className={styles.drawer}
      variant={variant}
      classes={{
        paper: styles.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={styles.drawerContainer}>
        <SideBarItems items={items} start="0" end="4" />
        <Divider />
        <SideBarItems items={items} start="4" end="5" />
      </div>
    </Drawer>
  );
};

export default SideDrawer;
