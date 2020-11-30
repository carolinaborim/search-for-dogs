import React from "react";

class Dog extends React.Component {
  onButtonClick = event => {
    console.log('Click Button');
  };

  render() {
    return (
      <div className="ui segment">
        <button  class="ui secondary button" onClick={this.onButtonClick.bind(this)}>Show Me a Doggo </button>
      </div>
    );
  }
}

export default Dog;