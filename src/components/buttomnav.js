import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import StorefrontIcon from "@material-ui/icons/Storefront";
import About from "./about";
import Favorite from "./favorite";
import ProductList from "./productlist";

const useStyles = makeStyles({
  stickToBottom: {
    background: "#e0e0e0",
    width: "100%",
    position: "fixed",
    bottom: 0
  }
});

export default function ButtomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Router>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(newValue);
        }}
        showLabels
        className={classes.stickToBottom}
      >
        <BottomNavigationAction
          label="商品"
          icon={<StorefrontIcon />}
          component={Link}
          to="/productlist"
        />
        <BottomNavigationAction
          label="我的最愛"
          icon={<FavoriteIcon />}
          component={Link}
          to="favorite"
        />
        <BottomNavigationAction
          label="關於我"
          icon={<AccountBoxRoundedIcon />}
          component={Link}
          to="about"
        />
      </BottomNavigation>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/favorite">
          <Favorite />
        </Route>
        <Route path="/productlist">
          <ProductList />
        </Route>
      </Switch>
    </Router>
  );
}
