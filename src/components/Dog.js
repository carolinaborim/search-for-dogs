import React from "react";
import axios from "axios";
import '../App.css';

class Dog extends React.Component {
  state = { images: {} };

  async onButtonClick() {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    this.setState({ image: response.data.message });
  };

  render() {
    return (
      <div className="container">
        <button className="ui violet basic button btn" onClick={this.onButtonClick.bind(this)}> Mostrar um Doguinho! </button>
        <div className="image">
            <img className="ui medium circular image" alt={this.state.image} src={this.state.image} />
        </div>
      </div>
    );
  }
}

export default Dog;