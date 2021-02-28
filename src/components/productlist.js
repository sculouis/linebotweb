import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardProduct from "./cardproduct";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5px",
    paddingBottom: "50px",
    flexGrow: 1
  }
}));

export default function ProductList() {
  var classes = useStyles();
  var [products] = useState([
    { id:1, name: "小熊", photo: "bear.jpg" },
    { id:2, name: "智能玩具", photo: "ball.png" },
    { id:3, name: "玩具汽車", photo: "car.jpg" },
    { id:4, name: "玩具房子", photo: "house.jpg" }
  ]);
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={2}>
          {products.map((item) => (
            <Grid key={item.id} item xs={12} md={4}>
              <CardProduct item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
