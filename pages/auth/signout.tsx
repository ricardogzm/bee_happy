import axios from "axios";
import { UserContext } from "contexts/UserContext";
import { NextPage } from "next";
import router from "next/router";
import { useContext, useEffect } from "react";

const Signout: NextPage = () => {
  const { mutate } = useContext(UserContext);
  const logoff = async () => {
    await axios
      .post("/api/auth/signout")
      .catch((error) => console.error(error))
      .then((response) => {
        mutate();
        setTimeout(() => router.push("/"), 1000);
      });
  };

  useEffect(() => {
    logoff();
  });

  return <div>Signing you out...</div>;
};

export default Signout;
