import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Auth from "./auth/Auth";

export default () => {
  const [check, update] = useState(false);
  const toggle = () => update(!check);

  return localStorage.getItem("kandy_kustomer") ? (
    <Dashboard />
  ) : (
    <Auth toggle={toggle} />
  );
};
