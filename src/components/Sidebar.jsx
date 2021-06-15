import React from "react";
// import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
import ChartLayout from "./ChartLayout";
import { useStyles } from "../utils/Theme";
import NavBar from "./NavBar";
import SideDrawer from "./SideDrawer";

function Sidebar() {
  const classes = useStyles();
  const sideBarItems = [
    "Bar Chart",
    "Pie Chart",
    "Scatter Chart",
    "Line Chart",
    "Histogram",
  ];

  const styles = {
    drawer: classes.drawer,
    drawerContainer: classes.drawerContainer,
    drawerPaper: classes.drawerPaper,
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <NavBar position="fixed" style={classes.appBar}>
        Flight Data Analysis
      </NavBar>

      <SideDrawer items={sideBarItems} styles={styles} variant="permanent" />

      <main className={classes.content}>
        <Toolbar />
        <ChartLayout />
      </main>
    </div>
  );
}

export default Sidebar;
