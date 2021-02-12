import React, { useState } from "react";
import { makeStyles, Hidden } from "@material-ui/core";
import ApplicationBar from "./ApplicationBar";
import ApplicationDrawer from "./ApplicationDrawer";

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
      <ApplicationBar onClick={handleDrawerToggle} />
      <Hidden smUp>
        <ApplicationDrawer
          variant="temporary"
          open={abrir}
          onClose={handleDrawerToggle}
        />
      </Hidden>
      <Hidden xsDown>
        <ApplicationDrawer variant="permanent" open={true} />
      </Hidden>
    </div>
  );
};

export default Header;
