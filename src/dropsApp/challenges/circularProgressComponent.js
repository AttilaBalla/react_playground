import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const CircularProgressWithLabel = ({percent}) => {
    return (
        <Box>
            <CircularProgress
                variant="determinate"
                value={percent}
                size={'15rem'}
            />
            <Typography variant="caption" component="div" color="textSecondary">
                {`${Math.round(percent,)}%`}
            </Typography>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    percent: PropTypes.number.isRequired,
};


export const CircularProgressComponent = () => {
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return <CircularProgressWithLabel percent={progress}/>;
};

