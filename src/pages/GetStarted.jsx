import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Container, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        backgroundColor: 'yellow',
        borderRadius: '30px',
        width: '200px',
        height: '50px',
        [theme.breakpoints.up('md')]: {
            bottom: '190px',
        },
        [theme.breakpoints.down('md')]: {
            bottom: '45px',
        },
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        alignContent: 'cemter',
        left: 'calc(50% - 100px)',
        right: 'calc(50% - 100px)',
        textAlign: 'center',
        boxShadow: '1px 2px 2px grey'
    },
    explore: {
        textDecoration: 'none',
        fontFamily: 'Poppins',
        color: '#15191f',
        fontWeight: '600'
    }
}));


export const GetStarted = () => {


    const classes = useStyles();
    return (
        <div className={classes.root} >
            <Container>
                <Grid container direction="row" alignItems="center" justify="center">
                    <Grid item xs={12} >
                        <a href="" className={classes.explore}>Explore Now</a>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}