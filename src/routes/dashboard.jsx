import React from "react";
import { Route, Routes } from "react-router";
import Absensi from "../views/dashboard/Absensi";
import Dashboard from "../views/dashboard/Dashboard";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="absensi" element={<Absensi />} />
    </Routes>
  );
};

export default DashboardRoutes;
