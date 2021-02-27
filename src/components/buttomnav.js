import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import ViewListIcon from "@material-ui/icons/ViewList";
import StorefrontIcon from "@material-ui/icons/Storefront";

const useStyles = makeStyles({
  stickToBottom: {
    background: "#e0e0e0",
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: "7 !important"
  }
});

export default function ButtomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
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
        label="我的訂單"
        icon={<ViewListIcon />}
        component={Link}
        to="myorders"
      />
      <BottomNavigationAction
        label="關於我"
        icon={<AccountBoxRoundedIcon />}
        component={Link}
        to="about"
      />
    </BottomNavigation>
  );
}
