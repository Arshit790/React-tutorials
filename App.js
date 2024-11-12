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
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?semt=ais_hybrid"
        />
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

// const styleCard = {
//   backgroundColor: "#f0f0f0",
// };

const RestaurantCard = ({ name, cuisines, ratings, ETA }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi"
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{ratings}⭐</h4>
      <h4>{ETA}mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          name="Meghana Foods"
          cuisines="Biryani, North-Indian"
          ratings="4.4"
          ETA="38"
        />
        <RestaurantCard
          name="KFC"
          cuisines="Fast Foods"
          ratings="4.1"
          ETA="20"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
