import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    // To create a hook in Class Based Component
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child Component Did Mount");
  }

  render() {
    const { name } = this.props;
    const { count, count2 } = this.state;
    console.log("Child Render");
    return (
      <div className="user-card">
        <h1>count : {count}</h1>
        <button
          onClick={() => {
            // Never update state variable directly in class based component
            // this.state.count = this.state.count + 1;
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Click Count
        </button>
        <h2>{name}</h2>
        <h3>Mathura</h3>
        <h3>arshitdixit5@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
