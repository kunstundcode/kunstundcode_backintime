import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    let visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }
    return (
      <div
        className={`projectSidebar ${visibility}`}
        onMouseDown={this.props.handleMouseDown}
      >
        <h2>
          <a href="#">Project_01</a>
        </h2>
        <h2>
          <a href="#">Project_02</a>
        </h2>
        <h2>
          <a href="#">Project_03</a>
        </h2>
        <h2>
          <a href="#">Project_04</a>
        </h2>
      </div>
    );
  }
}
