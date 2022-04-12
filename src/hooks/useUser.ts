import useSWR from "swr";
import axios from "axios";

interface ICurrentUser {
  currentUser: {
    id: string;
    username: string;
    email: string;
    iat: number;
  };
}

axios.defaults.baseURL = "http://localhost";

export const fetcher = (url: string) =>
  axios
    .get(url)
    .catch((err) => err.response)
    .then((res) => res.data);

export const useUser = () => {
  const { data, error, mutate } = useSWR<ICurrentUser>(
    "/api/auth/currentuser",
    fetcher
  );

  if (error) {
    console.log(error.status);
  }
  if (!data) {
    console.log("Loading...");
  }

  return { data, error, mutate };
};
