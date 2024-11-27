import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    // To create a hook in Class Based Component
    this.state = {
      // count: 0,
      // count2: 1,

      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount");
    // API CALLS MADE HERE TO AVOID WAITING FOR COMPONENT TO LOAD
    // const data = await fetch("https://api.github.com/users/Arshit790");
    // const json = await data.json();
    // this.setState({
    //   userInfo: json,
    // });

    // console.log(json);

    this.timer = setInterval(() => {
      console.log("Arshit");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component Updated..");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component Unmount successfully...");
  }

  render() {
    // const { name } = this.props;
    // const { count, count2 } = this.state;
    // console.log(this.props.name + "Child Render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* <h1>count : {count}</h1>
        <button
          onClick={() => {
            // Never update state variable directly in class based component
            //this.state.count = this.state.count + 1;
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Click Count
        </button> */}
        <img src={avatar_url} />
        <h2>{name}</h2>
        <h3>{location || "Default"}</h3>
        <h3>arshitdixit5@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
