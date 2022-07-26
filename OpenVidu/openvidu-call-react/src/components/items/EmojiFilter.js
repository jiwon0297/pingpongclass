import React, { Component } from "react";

export default class EmojiFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.user };
  }
  render() {
		console.log(this.state.user)
    return (
      <div style={{ position: "relative", height: "100%" }}>
        <h3
          style={{
            position: "absolute",
            fontSize: "140px",
            bottom: "0px",
            right: "0px",
          }}
        >
          {(this.state.user.smile ? '😁' : null)}
        </h3>
      </div>
    );
  }
}
