import axios from "axios";
import { NextPage } from "next";
import router from "next/router";
import { useEffect } from "react";
import { useUser } from "hooks/useUser";

const Signout: NextPage = () => {
  const { mutate } = useUser();
  const logoff = async () => {
    await axios
      .post("/api/auth/signout", { withCredentials: true })
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
