import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import EdanAvatar from '../../public/images/edan_grey_suit.jpg';
// import EdanAvatar from '../../public/images/edan.jpg';
// import Pepsi from './pepsi';
// import splashBackground from '../../public/images/lead-bg.jpg';

const styles = theme => ({
    root: {
        minHeight: "100%",
    },
    header: {
        marginTop: "12rem",
        [theme.breakpoints.down('sm')]: {
            marginTop: "8rem",
        },
    },
    body: {
        width: "100vw",
        minHeight: "53vh",
        [theme.breakpoints.down('sm')]: {
            minHeight: "65vh",
        },
    }
});

class About extends Component {
    componentDidMount() {
        console.log("About did mount");
        const about = document.getElementById('about');
        footer.addEventListener('animationend', (event) => {
            if (event.animationName === 'fadeIn') {
                if (footer.classList.contains('fade-in-1s')) {
                    footer.classList.remove('fade-in-1s');
                }
            }
        });
    }

    buildHexagons() {
        const hexagonArray = [
            {
                iconClassName: "mdi mdi-speedometer",
                hexagonHeader: "SPEED",
                hexagonText: "Time is the primary resource"
            },
            {
                iconClassName: "mdi mdi-cellphone-link",
                hexagonHeader: "REACH",
                hexagonText: "Cross-platform is my default"
            },
            {
                iconClassName: "mdi mdi-lightbulb-outline",
                hexagonHeader: "WISDOM",
                hexagonText: "Avoid technical debt"
            },
            {
                iconClassName: "mdi mdi-chart-line",
                hexagonHeader: "GROWTH",
                hexagonText: "Applications must scale"
            },
        ];
        return (
            <div className="row">
                {hexagonArray.map((value, index)=>{
                    return (
                        <div className="col-xs-6 col-md-3" key={`hexagon ${index}`}>
                            <div className={`hexagon flip-in-x-1dot5s`} style={{animationDelay: `${index*0.3+0.5}s`}}>
                                <i className={`${value.iconClassName}`}></i>
                            </div>
                            <div className="hexagon-header">
                                <h5>{value.hexagonHeader}</h5>
                                <h6>{value.hexagonText}</h6>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    render() {
        const { classes } = this.props;
        return (
            <div id="about" 
                className="fade-in-1s" 
                // style={{ 
                //     background: `url(${splashBackground})`, 
                //     backgroundSize: 'cover' 
                // }}
            >
                <div id="about-overlay"></div>
                <Grid
                    container
                    // justify="center"
                    alignItems="center"
                    direction={"column"}
                    className={classes.root}
                >
                    <Grid item className={classes.header}>
                        <div id="about-header">
                            <h1>Edan Kriss</h1>
                            <h2>Web Developer</h2>
                        </div>
                    </Grid>
                    <Grid item className={classes.body}>
                        <Grid
                            justify="center"
                            alignItems="center"
                            container
                            spacing={0}
                            className={classes.body}
                        >
                            <Grid item md={3}>
                                <img id="edan" src={EdanAvatar} />
                            </Grid>
                            <Grid item md={8}>
                                <this.buildHexagons />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Pepsi /> */}
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(About);