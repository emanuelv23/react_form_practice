import React, { useState } from "react";
import { makeStyles, Hidden } from "@material-ui/core";
import NavBar from "./NavBar";
import Drawer from "./Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
}));

const Header = () => {
  const classes = useStyles();

  const [abrir, setAbrir] = useState(false);

  const handleDrawerToggle = () => {
    setAbrir(!abrir);
  };

  return (
    <div className={classes.root}>
      <NavBar onClick={handleDrawerToggle} />
      <Hidden smUp>
        <Drawer
          variant="temporary"
          open={abrir}
          onClose={handleDrawerToggle}
        />
      </Hidden>
      <Hidden xsDown>
        <Drawer variant="permanent" open={true} />
      </Hidden>
    </div>
  );
};

export default Header;
