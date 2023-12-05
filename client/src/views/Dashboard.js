import React from "react";
import { useNavigate,useParams } from "react-router-dom";
import ClientDashboard from "../components/ClientDashboard";
import ProviderDashboard from "../components/ProviderDashboard";



const Dashboard = (props) => {
  let navigate = useNavigate();
  const { type } = useParams();


  if (type === 'client') {
    return <ClientDashboard logout={props.logout}  />;
  } else if (type === 'provider') {
    return <ProviderDashboard logout={props.logout} user={props.user}  />;
  } else {
    return (
      <div className="dashboard">
        <h2>Invalid user type</h2>
      </div>
    );
  }
};

export default Dashboard;

    