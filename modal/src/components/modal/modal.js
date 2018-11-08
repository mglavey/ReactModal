import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

class TimedModal extends Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const {open} = this.state;
        return (
            <div>
                <button onClick={this.onOpenModal}>Open modal</button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2>Modal</h2>
                </Modal>
            </div>
        );
    }
}

export default TimedModal;