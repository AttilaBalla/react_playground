import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: "25rem",
        marginTop: "4rem",
        padding: "2rem",
        textAlign: "center"
    },
    box: {
        position: 'relative',
    },
    text: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'

    },
    button: {
        width: "6rem",
    },
}));

const CircularProgressWithLabel = ({percent, color}) => {

    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <CircularProgress
                color={color}
                variant="determinate"
                value={percent}
                size={'15rem'}
            />
            <Typography className={classes.text} variant="caption" component="div" color="textSecondary">
                {`${Math.round(percent,)}%`}
            </Typography>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    percent: PropTypes.number.isRequired,
    color: PropTypes.string
};


export const CircularProgressComponent = ({timeInSeconds, color}) => {
    
    const classes = useStyles();

    const [seconds, setSeconds] = useState(0);
    const [enabled, setEnabled] = useState(false);
    
    const resetProgress = () => {
        setEnabled(true);
        setSeconds(0);
    }

    useEffect(() => {
        let timer = null;

        if (enabled) {
            timer = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        };
    }, [enabled]);

    if (enabled && seconds === timeInSeconds) {
        setEnabled(false);
    }


    return (
        <Paper elevation={3} className={classes.container}>
            <CircularProgressWithLabel
                color={color}
                percent={Math.round((seconds / timeInSeconds) * 100)}
            />
            <Button
                variant="contained"
                disabled={enabled}
                className={classes.button}
                color={color}
                onClick={resetProgress}
                startIcon={<SettingsBackupRestoreIcon/>}
            >
                Reset
            </Button>
        </Paper>
    );
};

CircularProgressComponent.propTypes = {
    timeInSeconds: PropTypes.number.isRequired,
    color: PropTypes.string
}
