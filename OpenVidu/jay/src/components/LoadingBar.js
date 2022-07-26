import React, { Component } from "react";
import "./LoadingBar.css";

export default class LoadingBar extends Component {
  render() {
    return (
			<div className='bar'>
				<div className="progress">
					<div className="color"></div>
				</div>
			</div>
    );
  }
}
