import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { FloatButton, Layout } from "antd";

const PublicLayout = () => {
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

export default PublicLayout;
