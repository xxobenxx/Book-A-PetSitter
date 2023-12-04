import React from "react";
import { useNavigate,useParams } from "react-router-dom";



const Dashboard = (props) => {
  let navigate = useNavigate();
const {type} = useParams();

  const userType = props.user.type;
  debugger
  if (type === 'client') {
    
  return (

    <div className="dashboard">
      {/* <h1>This is the secret page for {props.user.email}</h1> */}
      <h2>Welcome to the client Dashboard! You can access here only after verify the token</h2>


      <button
        onClick={() => {
          props.logout();
          navigate("/");
        }}
      >
        logout
      </button>


    </div>
  )
} else if (type === 'provider')  {
  return (

    <div className="dashboard">
      {/* <h1>This is the secret page for {props.user.email}</h1> */}
      <h2>Welcome to the Provider Dashboard! You can access here only after verify the token</h2>


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

} else {
  
  return (
    <div className="dashboard">
      <h2>Invalid user type</h2>
      
    </div>
  );
}

}



export default Dashboard;




// const Dashboard = (props) => {
//   let navigate = useNavigate();
//   return (
//     <div className="dashboard">
//       {/* <h1>This is the secret page for {props.user.email}</h1> */}
//       <h2>Welcome! You can access here only after verify the token</h2>
//       <button
//         onClick={() => {
//           props.logout();
//           navigate("/");
//         }}
//       >
//         logout
//       </button>
//     </div>
//   );
// };
