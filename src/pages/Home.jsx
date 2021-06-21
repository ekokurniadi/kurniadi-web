import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Navbar } from './Navbar';
import { BannerWeb } from './Banner'
import { GetStarted } from './GetStarted'
import { About } from './About'
import AOS from 'aos';
import "aos/dist/aos.css";
//Begin styling component
const useStyles = makeStyles({
    root: {
        flexFlow: 1
    }
});
//End styling component


const Home = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <section id="navbar">
                <Navbar />
            </section>
            <section id="bannerWeb">
                <BannerWeb />
            </section>
            <section id="getStarted">
                <GetStarted />
            </section>
            <section id="About">
                <About />
            </section>

        </div>
    )
}

export default Home
