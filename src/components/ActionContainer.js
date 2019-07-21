import React, { Component } from "react";

import { ActionButton, TimerForm } from "./index";

class ActionContainer extends Component {
  state = {
    isFormOpen: false
  };
  handleFormOpen = () => {
    this.setState({ isFormOpen: true });
  };
  render() {
    if (this.state.isFormOpen) {
      return <TimerForm />;
    } else {
      return <ActionButton handleFormOpen={this.handleFormOpen} />;
    }
  }
}

export { ActionContainer };
