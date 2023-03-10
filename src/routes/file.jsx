import React from "react";
import { Route, Routes } from "react-router";
import Index from "../views/file";

// component
import {AnggotaCreate} from "../views/file/AnggotaCreate";
import {AnggotaView} from "../views/file/AnggotaView";

import {AcaraView} from "../views/file/AcaraView";
import {AcaraCreate} from "../views/file/AcaraCreate";

const FileRoutes = () => {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="acara" element={<AcaraView />} />
      <Route path="acara/buat" element={<AcaraCreate />} />
      <Route path="anggota" element={<AnggotaView />} />
      <Route path="anggota/buat" element={<AnggotaCreate />} />
    </Routes>
  );
};

export default FileRoutes;
