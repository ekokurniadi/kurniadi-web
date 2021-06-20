import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Typewriter from 'typewriter-effect';

const useStyles = makeStyles({
    root: {
        flexFlow: 1,
        // minHeight: '300px',
        // backgroundColor: 'black',

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
        fontSize: '55px',
        // marginBottom: '-50px',
        marginTop: '50px',
        fontWeight: 'bold'
    }
});
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

