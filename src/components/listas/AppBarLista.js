import React from "react";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from "@material-ui/core";
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

const AppBarLista = () => {
    return (
        <List component="nav">
            <ListItem Button="true">
                <ListItemIcon>
                    <PeopleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Ver" />
            </ListItem>
            <ListItem Button="true">
                <ListItemIcon>
                    <PersonAddSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Nuevo" />
            </ListItem>
        </List>
    )
}

export default AppBarLista