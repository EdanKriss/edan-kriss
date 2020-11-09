import React from 'react';
import { Modal } from 'antd';
import Typography from '@material-ui/core/Typography';

import GridWithTitles from '../gridWithTitle.js';

export default (props) => {
    return (
        <Modal 
            title={props.title}
            centered
            footer={null}
            visible={props.visible}
            onCancel={props.toggleVisibility}
            width={"90vw"}
            bodyStyle={{
                textAlign: "center"
            }}
        >
            <GridWithTitles />

            {/* <div>
                <span>
                    <h1>Technologies:</h1>
                    <ul style={{width:"fit-content",margin:"auto"}}>
                        <li>Flutter</li>
                        <li>Node JS</li>
                        <li>Mongo DB</li>
                        <li>AWS S3</li>
                    </ul>
                </span>

                <span>
                    <h1>Features:</h1>
                    <ul style={{width:"fit-content",margin:"auto"}}>
                        <li>Cross-platform (iOS and Android)</li>
                        <li>Platform-aware cache management</li>
                        <li>Distrubuted computing techniques</li>
                        <li>Custom session management</li>
                    </ul>
                </span>
            </div>  */}
        </Modal>
    );
}