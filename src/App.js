// import { Chart } from "react-google-charts";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Sidebar />
    // <div style={{ display: "flex", maxWidth: 1920 }}>
    //   <Chart
    //     width={1280}
    //     height={768}
    //     chartType="ColumnChart"
    //     loader={<div>Loading Chart</div>}
    //     data={[
    //       ["City", "2010 Population", "2000 Population"],
    //       ["New York City, NY", 8175000, 8008000],
    //       ["Los Angeles, CA", 3792000, 3694000],
    //       ["Chicago, IL", 2695000, 2896000],
    //       ["Houston, TX", 2099000, 1953000],
    //       ["Philadelphia, PA", 1526000, 1517000],
    //     ]}
    //     options={{
    //       title: "Population of Largest U.S. Cities",
    //       chartArea: { width: "50%" },
    //       hAxis: {
    //         title: "Total Population",
    //         minValue: 0,
    //       },
    //       vAxis: {
    //         title: "City",
    //       },
    //     }}
    //     legendToggle
    //   />
    // </div>
  );
}

export default App;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import AppBar from "@material-ui/core/AppBar";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
// import ChartLayout from "./components/ChartLayout";

// const drawerWidth = 300;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerContainer: {
//     overflow: "auto",
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));

// export default function ClippedDrawer() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar position="fixed" className={classes.appBar}>
//         <Toolbar>
//           <Typography variant="h6" noWrap>
//             Flight Data Analysis
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         className={classes.drawer}
//         variant="permanent"
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//       >
//         <Toolbar />
//         <div className={classes.drawerContainer}>
//           <List>
//             {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//               <ListItem button key={text}>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//           <List>
//             {["All mail", "Trash", "Spam"].map((text, index) => (
//               <ListItem button key={text}>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//         </div>
//       </Drawer>
//       <main className={classes.content}>
//         <Toolbar />
//         <ChartLayout />
//       </main>
//     </div>
//   );
// }
