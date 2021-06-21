import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Typewriter from 'typewriter-effect';
import Backgound from '../assets/inifite.gif'
const useStyles = makeStyles((theme) => ({
    root: {
        flexFlow: 1,
        backgroundImage: `url(${Backgound})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        objectFit: 'contain',
        minHeight: '400px',
        backgroundColor: 'black',
        position: 'relative',
        top: '100px'
    },
    quote: {
        textAlign: 'center',
        fontFamily: 'Indie Flower',
        color: 'yellow',
        fontSize: '35px'
    },
    typeWriter: {
        textAlign: 'center',
        fontFamily: 'Indie Flower',
        color: '#4BBAE6',
        [theme.breakpoints.up('sm')]: {
            fontSize: '55px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '25px',
        },
        marginTop: '50px',
        fontWeight: 'bold'
    }
}));
export const BannerWeb = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <Grid container direction="row" alignItems="center" justify="center">
                    <Grid item md={12} sm={12} xs={12} className={classes.typeWriter}>
                        <Typewriter
                            options={{
                                strings: ['WEB DEVELOPER', 'MOBILE APPS DEVELOPER', 'IT CONSULTANT'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} className={classes.quote}>
                        <h5>Make it work, make it right, make it fast</h5>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

