import React, { Component } from "react";
import SidebarButton from "./SidebarButton";
import Sidebar from "./Sidebar";

export default class SidebarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState({
      visible: !this.state.visible
    });
  }

  handleMouseDown(e) {
    this.toggleSidebar();
    console.log("clicked the sidebar");
    // e.stopPropagation();
  }

  render() {
    return (
      <div className="sidebarContainer">
        <SidebarButton handleMouseDown={this.handleMouseDown} />
        <Sidebar
          handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}
        />
      </div>
    );
  }
}
