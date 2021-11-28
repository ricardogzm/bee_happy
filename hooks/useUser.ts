import useSWR from "swr";

interface ICurrentUser {
  currentUser: {
    id: string;
    username: string;
    email: string;
    iat: number;
  };
}

const fetcher = (url: string) => fetch(url).then((res: Response) => res.json());

export const useUser = () => {
  const { data, error } = useSWR<ICurrentUser>("/api/currentuser", fetcher);

  if (error) {
    console.error("Error");
  }
  if (!data) {
    console.log("Loading...");
  }

  return data;
};
