import useSWR from "swr";
import axios from "axios";

export type Post = {
  _id: string;
  userid: string;
  username: string;
  date: string;
  text: string;
  likes: number;
  image?: string;
  // comments:
};

type Posts = Post[];

// interface IPosts {
//   posts: Post[]
// }

axios.defaults.baseURL = "http://localhost";

export const fetcher = (url: string) =>
  axios
    .get(url)
    .catch((err) => err.response)
    .then((res) => res.data);

export const usePosts = () => {
  const { data, error, mutate } = useSWR<Posts>("/api/posts/getposts", fetcher);

  if (error) {
    console.log(error.status);
  }
  if (!data) {
    console.log("Loading...");
  }

  return { data, error, mutate };
};
