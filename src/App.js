import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import {makeStyles} from "@material-ui/core/styles";
import {DropsApp} from "dropsApp/dropsApp";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const useStyles = makeStyles(() => ({
    appContainer: {
        maxWidth: 1000,
        margin: 'auto'
    }
}));

function App() {

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <div className={classes.appContainer}>
                    <DropsApp/>
                </div>
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;
