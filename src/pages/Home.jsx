import React from 'react'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Navbar } from './Navbar';
import { BannerWeb } from './Banner'
//Begin styling component
const useStyles = makeStyles({
    root: {
        flexFlow: 1
    }
});
//End styling component


const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Navbar />
            <BannerWeb />
        </div>
    )
}

export default Home
