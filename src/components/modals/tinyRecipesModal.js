import React from 'react';
import { Modal } from 'antd';

import GridWithTitles from '../gridWithTitle.js';

export default (props) => {
    return (
        <Modal 
            title={props.title}
            centered
            footer={null}
            visible={props.visible}
            onCancel={props.toggleVisibility}
        >
            <GridWithTitles />
        </Modal>
    );
}