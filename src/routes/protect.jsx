import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectRoutes() {
  const isLoggedIn = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      // ada akun
    } else {
      navigate("account/login", {
        state: {
          message:
            "kamu belum memiliki akun. silahkan login atau signup terlebih dahulu",
        },
      });
    }
  }, []);

  return isLoggedIn ? <Outlet /> : <h1>Loading ...</h1>;
}

export default ProtectRoutes;
