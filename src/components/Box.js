import React, { Component } from "react";

import { ListContainer, ActionContainer } from "./index";

class Box extends Component {
  state = {
      timers: [
          {
            title:"Apprendre React",
            project:"Développement Web",
            elapsed:5609620,
            id:"0a4a79cb-b06d-4cb1-883d-549a1e3b66d7",
            runningSince:Date.now()
          },
          {
            title:"Apprendre Angular",
            project:"Développement Web",
            elapsed:1349620,
            id:"0a4a79cb-b06d-4cb1-883d-549a1e3b66d4",
            runningSince:null
          },
      ]
  }
  render() {
    return (
      <div className="boxed--view">
        <div className="boxed--view__box">
          <ListContainer 
              timers={this.state.timers}
          />
          <ActionContainer />
        </div>
      </div>
    );
  }
}

export { Box };
