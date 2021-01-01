import React from 'react';
import './Header.css';
import Modal from "./Modal";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div id="header">
        <span id="home">
          <a href="/">StackStocks</a>
        </span>
        <div className="buttons">
          <div onClick={this.openModal} id="help">
            <i className="fa fa-question-circle"></i>
            <span>HELP</span>
          </div>
          <Modal isOpen={this.state.isModalOpen} close={this.closeModal} />
          <a href="/question" id="question">
            <i className="fa fa-envelope"></i>
            <span>Q&A</span>
          </a >
        </div>
      </div>
    );
  }
}

export default Header;