import React from "react";
import { useAuth } from "../../../core/store/authContext";
import { Button } from "antd";

const Home = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h1>Home page</h1>
      <Button type="primary" color="red" onClick={() => logout()}>logout</Button>
    </div>
  );
};

export default Home;
