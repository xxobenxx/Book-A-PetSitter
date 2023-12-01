import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = (props) => {
  let navigate = useNavigate();
  return (
    <div className="dashboard">
      {/* <h1>This is the secret page for {props.user.email}</h1> */}
      <h2>Welcome! You can access here only after verify the token</h2>
      <button
        onClick={() => {
          props.logout();
          navigate("/");
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Dashboard;