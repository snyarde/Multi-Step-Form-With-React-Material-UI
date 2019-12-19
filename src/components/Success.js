import React, { Component, Fragment } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

class Success extends Component {
  back = e => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">Success</Typography>
            </Toolbar>
          </AppBar>
          <h1>Thank you for your submission</h1>
          <p>You will get an email with further instructions</p>
          <Button
            variant="contained"
            color="default"
            style={styles.button}
            onClick={this.back}
          >
            Back
          </Button>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Success;
