import React, { Component } from "react";
import "./QuizModal.css";

class QuizModal extends Component {
  constructor(props) {
    super(props);
    this.state = { display: this.props.display };
		this.close = this.close.bind(this)
  }

  componentDidUpdate() {
    if (this.state.display !== this.props.display) {
      this.setState({ display: this.props.display });
    }
  }

  close() {
    this.props.toggleQuiz();
  }

  render() {
    return (
      <div className={this.state.display ? "openModal modal" : "modal"}>
        {this.state.display ? (
          <section>
            <header>
              {this.props.header}
              <button className="close" onClick={this.close}>
                &times;
              </button>
            </header>
            <div>
              <h1 style={{ padding: "10px" }}>
                안녕친구들 나는 대머리 독수리야
              </h1>
            </div>
            <footer>
              <button className="close" onClick={this.close}>
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    );
  }
}

export default QuizModal;
