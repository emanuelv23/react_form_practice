import React from "react";
import { Link, withRouter } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import PersonAddSharpIcon from "@material-ui/icons/PersonAddSharp";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

const EmpleadosListaIconos = (props) => {
  const listItems = [
    {
      text: "Nuevo",
      icon: <PersonAddSharpIcon />,
      onClick: () => props.history.push("/empleados/nuevo"),
    },
    {
      text: "Ver",
      icon: <PeopleOutlineIcon />,
      onClick: () => props.history.push("/empleados/ver"),
    },
  ];
  const linkToSection = () => {
    props.history.push("/empleados/nuevo");
  };
  return (
    <List component="nav">
      {/*  <ListItem Button="true" onclick={linkToSection}>
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
      </ListItem> */}
      {listItems.map((item) => (
        <ListItem button key={item.text} onClick={item.onClick}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
};

export default withRouter(EmpleadosListaIconos);
