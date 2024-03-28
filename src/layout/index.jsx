import React from "react";
import {
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
// import { auth } from '../core/store';
import { useAuth } from "../core/store/authContext";

export const Layout = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div>
      navbar
      <Outlet />
      footer
    </div>
  );
};
