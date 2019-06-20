import React from 'react';
import rabbit from './../../assets/images/rabbit.png';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
    icon: {
      maxHeight: "32px"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    }
}));

const HeaderView = (props) => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <img src={rabbit} className={classes.icon} alt=""/>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.logoutButton}>
                    Log out
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderView;