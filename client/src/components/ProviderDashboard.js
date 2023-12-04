import React from "react";

const ProviderDashboard = ({ logout, navigate }) => {
  return (
    <div className="dashboard">
      <h2>Welcome to the Provider Dashboard! You can access here only after verifying the token</h2>

      {/* Provider Form */}
      <form>
      <h1>PROVIDER INFORMATION</h1>
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
          About:
          <input type="text" />
        </label>
        <label>
          Service Type:
          <input type="radio" name="serviceType" value="dog" /> Dog
          <input type="radio" name="serviceType" value="cat" /> Cat
          <input type="radio" name="ownerType" value="bird" /> Bird
          <input type="radio" name="ownerType" value="reptile/amphibian/serpent" /> Reptile/Amphibian/Serpent
          <input type="radio" name="ownerType" value="banana" /> Banana
        </label>
      </form>

      <button onClick={() => { logout(); navigate("/"); }}>Logout</button>
    </div>
  );
};

export default ProviderDashboard;