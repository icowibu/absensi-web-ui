import React from "react";
import { Route, Routes } from "react-router";
import Index from "../views/file";

// component
import { Acara } from "../views/file/Event";
import { Anggota } from "../views/file/anggota";

const FileRoutes = () => {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="acara" element={<Acara />} />
      <Route path="anggota" element={<Anggota />} />
    </Routes>
  );
};

export default FileRoutes;
