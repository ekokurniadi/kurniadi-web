import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import my from '../assets/arrow.gif'
const useStyles = makeStyles({
    root: {
        flexGrow: 1,

    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '110px'
    }
});
export const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <img src={my} alt="" width="60px" />
            </div>
        </div>
    )
}
