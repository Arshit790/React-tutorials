import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div className="about-us">
        <User name={"Functional Component"} />

        {/* <UserClass name={"Arshit (class1)"} /> */}
        {/* <UserClass name={"Lucky (class2)"} /> */}
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
