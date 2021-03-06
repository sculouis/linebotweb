import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  listitem: {
    backgroundColor: theme.palette.background.default
  },
  root: {
    marginTop: "5px",
    paddingBottom: "50px",
    flexGrow: 1
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

export default function MessageLog() {
  const classes = useStyles();
  const [message, setMessage] = useState([]);
  const [open, setOpen] = React.useState(false);
  async function fetchMessageLog() {
    setOpen(true);
    const response = await fetch(
      "https://linebothook.herokuapp.com/messagelog"
    );
    const messageslog = await response.json();
    return messageslog;
  }

  useEffect(() => {
    fetchMessageLog().then((data) => {
      setMessage(data);
      console.log(data);
      setOpen(false);
    });
  }, []);

  return (
    <div className={classes.root}>
      <Container fixed>
        <h2>訊息紀錄</h2>
        <List className={classes.listitem}>
          {message.map((item, index) => (
            <>
              <ListItem key={index}>
                <ListItemText
                  primary={item.text_message}
                  secondary={item.created_on}
                />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
        <Backdrop className={classes.backdrop} open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Container>
    </div>
  );
}
