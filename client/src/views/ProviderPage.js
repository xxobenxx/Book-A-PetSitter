import React from "react";
import { useLocation } from "react-router-dom";

const ProviderPage = () => {
  const location = useLocation();
 

  return (
    <div className="provider-page">
      <h2>this is petsitter page</h2>
      
    </div>
  );
};

export default ProviderPage;