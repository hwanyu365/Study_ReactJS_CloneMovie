import React from "react";
import PropTypes from "prop-types";

// function App() {
//   return (
//     <div>
//       {foods.map((food) => (
//         <Food
//           key={food.id}
//           name={food.name}
//           picture={food.img}
//           rating={food.rating}
//         />
//       ))}
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    count: 0,
  };

  // Lifecycle : Mounthing
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1> The number is {this.state.count}.</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  // Lifecycle : Updating
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  // Lifecycle : Unmounting
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  // functions
  add = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };

  minus = () => {
    this.setState((current) => ({
      count: current.count - 1,
    }));
    console.log(this.state.count);
  };
}

export default App;
