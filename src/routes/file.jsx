import React from "react";
import { Route, Routes } from "react-router";
import Index from "../views/file";

// component
import { Acara } from "../views/file/Event";
import { Anggota } from "../views/file/anggota";
import AnggotaView from "../views/file/anggotaView";

const FileRoutes = () => {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="acara" element={<Acara />} />
      <Route path="anggota" element={<AnggotaView />} />
      <Route path="anggota/buat" element={<Anggota />} />
    </Routes>
  );
};

export default FileRoutes;
