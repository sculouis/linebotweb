import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  listitem: {
    backgroundColor: theme.palette.background.default
  },
  root: {
    margin: "5px",
    flexGrow: 1
  }
}));

export default function MyOrders() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container fixed>
        <h2>我的訂單紀錄</h2>
      </Container>
    </div>
  );
}
