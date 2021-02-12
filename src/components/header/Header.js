import React, { useState } from "react";
import { makeStyles, Hidden } from "@material-ui/core";
import HeaderNavBar from "./HeaderNavBar";
import HeaderDrawer from "./HeaderDrawer";

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
      <HeaderNavBar onClick={handleDrawerToggle} />
      <Hidden smUp>
        <HeaderDrawer
          variant="temporary"
          open={abrir}
          onClose={handleDrawerToggle}
        />
      </Hidden>
      <Hidden xsDown>
        <HeaderDrawer variant="temporary" open={true} />
      </Hidden>
    </div>
  );
};

export default Header;
