import React from "react";
import axios from "axios";

class Dog extends React.Component {
  async onButtonClick() {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log(response);
  };

  render() {
    return (
      <div className="ui segment">
        <button  className="ui secondary button" onClick={this.onButtonClick.bind(this)}>Show Me a Doggo </button>
      </div>
    );
  }
}

export default Dog;