import React from "react";
import { useSelector } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Divider from "@material-ui/core/Divider";
import AddCircleIcon from "@material-ui/icons/AddCircle";
export default function Cart() {
  const datas = useSelector((state) => state.productsReducer);
  const products = datas.map((item) => (
    <>
      <ListItem>
        <ListItemText primary={item.name} secondary={item.price} />
        <ListItemText primary="數量" secondary="1" />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <AddCircleIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  ));

  return (
    <List component="nav" aria-label="mailbox folders">
      {products}
    </List>
  );
}
