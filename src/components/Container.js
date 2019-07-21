import React, { Component } from "react";

import { Timer, TimerForm } from "./index";

class Container extends Component {
  state = {
      isEditFormOpen: false
  }
  render() {
    if (this.state.isEditFormOpen) {
      return (
        <TimerForm 
            title={this.props.title} 
            project={this.props.project} 
            id={this.props.title}
        />
      );
    } else {
      return (
        <Timer
          id={this.props.title}
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
        />
      );
    }
  }
}

export { Container };
