import React, { Component } from "react";

class Timer extends Component {
  render() {
    return (
      <div className="timer--box">
        <div className="timer--content">
          <div className="timer--header">
            <h2>{this.props.title}</h2>
          </div>
          <div className="timer--meta">
            <p>{this.props.project}</p>
          </div>
          <div className="timer--h2">
            <h4>02:37:50</h4>
          </div>
          <div className="actions">
            <span className="trash">Trash</span>
            <span className="edit">Edit</span>
          </div>
        </div>
        <button className="button">Commencer</button>
      </div>
    );
  }
}

export { Timer };
