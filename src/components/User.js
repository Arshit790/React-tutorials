import { useState, useEffect } from "react";
const User = ({ name }) => {
  const [count] = useState(0);
  const [count1] = useState(1);

  useEffect(() => {
    setInterval(() => {
      console.log("Lucky");
    }, 1000);
  }, []);

  return (
    <div className="user-card">
      <h1>{count}</h1>
      <h1>{count1}</h1>
      <h2>{name}</h2>
      <h3>Mathura</h3>
      <h3>arshitdixit5@gmail.com</h3>
    </div>
  );
};

export default User;
