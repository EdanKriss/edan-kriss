import React from 'react';
import { Modal } from 'antd';
import Grid from '@material-ui/core/Grid';
import sensorImg from 'Images/projects/blood-oxygen/sensor.png';
import codeImg from 'Images/projects/blood-oxygen/code.png';
import breadboardWorkingImg from 'Images/projects/blood-oxygen/breadboard_working.png';
import Typography from '@material-ui/core/Typography';

export default (props) => {
    const notMobile = window.matchMedia('(min-width:600px)').matches;
    return (
        <Modal 
            title={props.title}
            centered
            footer={null}
            visible={props.visible}
            onCancel={props.toggleVisibility}
            width={notMobile ? "70vw" : "95vw"}
            bodyStyle={{
                textAlign: "center"
            }}
        >
                <Grid container spacing={5}>

                    <Grid item xs={12}>
                        <Typography style={{fontSize: notMobile ? "3rem" : "2rem", fontFamily: "inherit"}}>
                            This project uses an Arduino Uno as the microcontroller driving a pulse oximeter. The Arduino is tasked with listening for, storing, validating, interpreting, and then displaying the incoming data from the sensor.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <img src={sensorImg} style={{float: "left", width: notMobile ? "70%" : "90%"}} />
                    </Grid>
                    <Grid
                        xs={12}
                        sm={7}
                        item
                        container
                        direction="column"
                        display="flex"
                        justify="center"
                    >
                        <Typography style={{fontSize: "2rem", fontFamily: "inherit"}}>
                            Maxim Integrated provides a handy referance design for their MAX30102 pulse oximeter. While small, the placement of the wire terminals on the side meant I had to be careful with my soldering.
                        </Typography>
                    </Grid>


                    <Grid item xs={12} sm={4}>
                        <img src={codeImg} style={{float: "left", width: notMobile ? "70%" : "90%"}} />
                    </Grid>
                    <Grid
                        xs={12}
                        sm={7}
                        item
                        container
                        direction="column"
                        display="flex"
                        justify="center"
                    >
                        <Typography style={{fontSize: "2rem", fontFamily: "inherit"}}>
                            This represents my first practical use of the c programming language. The language has a deserved reputation as unforgiving. Code is also specific to hardware, lowering the ability to re-use code.
                        </Typography>
                    </Grid>


                    <Grid item xs={12} sm={4}>
                        <img src={breadboardWorkingImg} style={{float: "left", width: notMobile ? "70%" : "90%"}} />
                    </Grid>
                    <Grid
                        xs={12}
                        sm={7}
                        item
                        container
                        direction="column"
                        display="flex"
                        justify="center"
                    >
                        <Typography style={{fontSize: "2rem", fontFamily: "inherit"}}>
                            The end result is a fully functional pulse oximeter! Next steps: package it as a wearable for a sleep study, and set it up to log results overnight to a server.
                        </Typography>
                    </Grid>

                </Grid>
        </Modal>
    );
}