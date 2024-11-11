import React from "react";
import ReactDOM from "react-dom";

/**
 * Header
 *   Logo
 *  Navbar
 * Body
 *   Search
 *   Restaurant Container
 *    -img
 *    -name of res,stars,cuisine,delivery time
 * Footer
 *    -copyrights
 *     -links
 *    -address
 *    -contact

 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?semt=ais_hybrid" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
