import React, { Component } from "react";
import "./LoadingBar.css";

export default class LoadingBar extends Component {
  render() {
    return (
			<div className="container">
				<div className='bar'>
					<div className="progress">
						<div className="color"></div>
					</div>
				</div>
				<p className="description">{'😁'} 3초 후 이모지 사용</p>
			</div>
    );
  }
}
