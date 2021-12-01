import { Post } from "@components/feed";
import { CreatePost } from "@components/feed";
import { UserContext } from "contexts/UserContext";
import router from "next/router";
import { usePosts } from "hooks/usePosts";
import { useContext, useEffect } from "react";

const Feed = () => {
  const { data } = useContext(UserContext);

  const { data: postsData, mutate: postsMutate } = usePosts();

  useEffect(() => {
    if (!data?.currentUser) {
      router.push("/");
    }
  }, [data, postsData]);

  return (
    <div className="py-8 w-full">
      <div className="flex justify-center">
        <div className="w-full max-w-lg lg:max-w-2xl">
          <CreatePost />
          {postsData && (
            <div className="space-y-5">
              {postsData!.map((post) => (
                <Post key={post._id} {...post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feed;
