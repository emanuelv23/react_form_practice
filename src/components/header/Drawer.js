import React from "react";
import { makeStyles, Drawer, Divider } from "@material-ui/core";
import EmpleadosLista from "../listas/EmpleadosLista";

const styles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
}));

const Drawer = (props) => {
  const classes = styles();

  /*   const handleClose = () => {
    if (props.onClose) {
      return props.onClose;
    } else {
      return null;
    }
  }; */

  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
      variant={props.variant}
      open={props.open}
      onClose={props.onClose}
    >
      <div className={classes.toolbar}></div>
      <Divider />
      <EmpleadosLista />
    </Drawer>
  );
};

export default Drawer;
