import React, { Component } from "react";

class TimerForm extends Component {
  state = {
    title: this.props.title || "",
    project: this.props.title || ""
  };
  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };
  handleProjectChange = e => {
    this.setState({ project: e.target.value });
  };
  render() {
    const submitText = this.props.title ? "Modifier" : "Créer";
    return (
      <div className="form">
        <div className="form--content">
          <div className="form--item">
            <label>Titre</label>
            <input
              type="text"
              placeholder="Mon Titre"
              value={this.props.title}
              onChange={this.handleTitleChange}
            />
          </div>
          <div className="form--item">
            <label>Projet</label>
            <input
              type="text"
              placeholder="Mon Projet"
              value={this.props.project}
              onChange={this.handleProjectChange}
            />
          </div>
        </div>
        <div className="form--button">
          <button className="button btn--submit">{submitText}</button>
          <button className="button btn--cancel">Annuler</button>
        </div>
      </div>
    );
  }
}

export { TimerForm };
