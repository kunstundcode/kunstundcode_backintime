import React, { Component } from "react";

export default class SidebarButton extends Component {
  render() {
    console.log("props die SidebarButton mitbekommt---", this.props);
    return (
      <button
        className="sidebarButton"
        onMouseDown={this.props.handleMouseDown}
      >
        _view-em-all_
      </button>
    );
  }
}
