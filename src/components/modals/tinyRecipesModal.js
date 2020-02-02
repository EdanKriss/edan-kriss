import React from 'react';
import { Modal } from 'antd';

export default (props) => {
    return (
        <Modal 
            title={props.title}
            centered
            footer={null}
            visible={props.visible}
            onCancel={props.toggleVisibility}
        >
            
        </Modal>
    );
}