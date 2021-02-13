import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import PersonAddSharpIcon from "@material-ui/icons/PersonAddSharp";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

const EmpleadosListaIconos = () => {
  return (
    <List component="nav">
      <ListItem Button="true">
        <ListItemIcon>
          <PersonAddSharpIcon />
        </ListItemIcon>
        <ListItemText primary="Nuevo" />
      </ListItem>
      <ListItem Button="true">
        <ListItemIcon>
          <PeopleOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Todos" />
      </ListItem>
    </List>
  );
};

export default EmpleadosListaIconos;
