import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import HeaderNavBar from "./HeaderNavBar";
import HeaderDrawer from "./HeaderDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HeaderNavBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <HeaderDrawer open={open} handleDrawerClose={handleDrawerClose} />
    </div>
  );
};

export default Header;
