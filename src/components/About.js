import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div className="about-us">
        <UserClass name={"Arshit (class)"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div className="about-us">
//       <UserClass name={"Arshit (class)"} />
//     </div>
//   );
// };

export default About;
