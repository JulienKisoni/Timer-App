import React, { Component } from "react";

import { Container } from "./index";

class ListContainer extends Component {
  renderContainer() {
      return this.props.timers.map(timer => {
          return (
            <Container
              title={timer.title}
              project={timer.project}
              elapsed={timer.elapsed}
              id={timer.id}
              key={timer.id}
              runningSince={timer.runningSince}
            />
          );
      });
  }
  render() {
    return (
      <div className="list--container">
        {this.renderContainer()}
      </div>
    );
  }
}

export { ListContainer };
