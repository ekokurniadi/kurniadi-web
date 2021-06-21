import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Container, Grid } from '@material-ui/core';
import my from '../assets/my2.png'
import Scrollspy from 'react-scrollspy'

// begin styling styled component
const useStyles = makeStyles({
    root: {
        flex: 1,
        fontFamily: 'Poppins',
        fontWeight: 'w400',
        letterSpacing: 3

    },
    navbarLogo: {
        width: '80px',
        justifyContent: 'center'
    },
    navbar: {
        backgroundColor: 'black',
    },
    navigation: {
        textDecoration: 'none',
        color: 'white',
        '&:hover': {
            color: "yellow",
        },

    }
});
// end of styling styled component

export const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.navbar}>
                <Container>
                    <Scrollspy items={['section-1', 'section-2', 'section-3']} currentClassName="is-current">
                        <Grid container direction="row" alignItems="center">
                            <Grid item md={6} xs={3}>
                                <img src={my} alt="" className={classes.navbarLogo} data-aos="fade-down" />
                            </Grid>
                            <Grid item md={2} xs={3} data-aos="fade-down" >
                                <a href="#bannerWeb" className={classes.navigation} >About</a>
                            </Grid>
                            <Grid item md={2} xs={3} data-aos="fade-down" >
                                <a href="" className={classes.navigation} >Work</a>
                            </Grid>
                            <Grid item md={2} xs={3} data-aos="fade-down" >
                                <a href="" className={classes.navigation} >Contact</a>
                            </Grid>
                        </Grid>
                    </Scrollspy>
                </Container>
            </AppBar>

        </div>
    )
}
