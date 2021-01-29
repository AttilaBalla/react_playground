import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CircularProgressComponent} from "dropsApp/components/circularProgressComponent";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        margin: 'auto'
    },
}));


export const DropsApp = () => {

    // styling
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgressComponent timeInSeconds={3600} color={"primary"}/>
            <CircularProgressComponent timeInSeconds={10800} color={"secondary"}/>
        </div>
    );
};