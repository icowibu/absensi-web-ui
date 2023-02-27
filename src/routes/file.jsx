import React from "react";
import { Route, Routes } from "react-router";
import Index from "../views/file";

// component
import Event from "../views/file/Event";
import People from "../views/file/People";

const FileRoutes = () => {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="acara" element={<Event />} />
      <Route path="orang" element={<People />} />
    </Routes>
  );
};

export default FileRoutes;
