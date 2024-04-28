import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { auth } from '../core/store';
import { useAuth } from "../core/store/authContext";
import Navbar from "../components/navbar";
import { Layout, Menu, Button, theme, FloatButton } from "antd";
import SideBar from "../components/sidebar";
const { Header, Sider, Content } = Layout;

export const PrivateLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return (
    <Layout>
      {user && <SideBar collapsed={collapsed} />}
      <Layout>
        <Navbar menuState={[collapsed, setCollapsed]} />
        <Content
          style={{
            // margin: "24px 16px",
            // padding: 24,
          }}
        >
          <Outlet />
          <FloatButton.BackTop />
        </Content>
      </Layout>
    </Layout>
  );
};
