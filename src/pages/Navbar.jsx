import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Container, Grid } from '@material-ui/core';
import my from '../assets/my2.png'

// begin styling styled component
const useStyles = makeStyles({
    root: {
        flexFlow: 1,
        fontFamily: 'Poppins',
        letterSpacing: 3

    },
    navbarLogo: {
        width: '80px',

    },
    navbar: {
        backgroundColor: '#15191f'
    },
    navigation: {
        textDecoration: 'none',
        color: 'white'
    }
});
// end of styling styled component

export const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.navbar}>
                <Container>
                    <Grid container direction="row" alignItems="center">
                        <Grid item md={4} xs={2}>
                            <img src={my} alt="" className={classes.navbarLogo} />
                        </Grid>
                        <Grid item md={2} xs={1}>

                        </Grid>
                        <Grid item md={2} xs={3}>
                            <a href="" className={classes.navigation}>ABOUT</a>
                        </Grid>
                        <Grid item md={2} xs={3}>
                            <a href="" className={classes.navigation}>WORK</a>
                        </Grid>
                        <Grid item md={2} xs={3}>
                            <a href="" className={classes.navigation}>CONTACT</a>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
        </div>
    )
}
