import React, { Component } from "react";

class ToggleRenderProps extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState(prevState => ({
      on: !prevState.on
    }));
  };

  render() {
    const { render } = this.props;
    return (
      <div className="renderFromChild">
        {render({
          on: this.state.on,
          toggle: this.toggle
        })}
      </div>
    );
  }
}

export default ToggleRenderProps;
