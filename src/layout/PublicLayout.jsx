import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { FloatButton, Layout } from "antd";

const PrivateLayout = () => {
  return (
    <Layout>
      <Navbar />
      <Layout>
        <Outlet />
        <FloatButton.BackTop />
      </Layout>
    </Layout>
  );
};

export default PrivateLayout;
