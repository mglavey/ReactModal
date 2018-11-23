import React, { Component } from 'react';
import Modal from 'react-responsive-modal';


class TimedModal extends Component {
    constructor() {
        super();
        this.state = {
            open : false
        };
        this.showModal = this.showModal.bind(this);
    }

    showModal () {
        setTimeout(() => {
            this.setState({ open: true });
            }, 10000);
        console.log('Show modal ');
    }

    componentDidMount() {
        this.showModal();
    }

    render() {
        return (
            <div>
                {/* <button onClick={this.onOpenModal}>Open modal</button> */}
                <Modal open={this.state.showModal}>
                    <h2>Modal</h2>
                </Modal>
            </div>
        );
    }
}


export default TimedModal;

