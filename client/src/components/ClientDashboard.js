import React from "react";

const ClientDashboard = ({ logout, navigate }) => {
  return (

    <div className="main">
      <h2>Welcome to the Client Dashboard! You can access here only after verifying the token</h2>

      {/* Client Form */}
      <form>
        <h1>CLIENT INFORMATION</h1>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Surname:
          <input type="text" />
        </label>
        <label>
          Address:
          <input type="text" />
        </label>
        <label>
          Contact Number:
          <input type="text" />
        </label>
        <label>
          I am Owner of:
          <input type="radio" name="ownerType" value="dog" /> Dog
          <input type="radio" name="ownerType" value="cat" /> Cat
          <input type="radio" name="ownerType" value="bird" /> Bird
          <input type="radio" name="ownerType" value="reptile/amphibian/serpent" /> Reptile/Amphibian/Serpent
          <input type="radio" name="ownerType" value="banana" /> Banana
        </label>
      </form>

      <button onClick={() => { logout(); navigate("/"); }}>Logout</button>
    </div>
  );
};

export default ClientDashboard;