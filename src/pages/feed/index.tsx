import router from "next/router";
import { useEffect } from "react";
import { Post } from "@components/feed";
import { useUser } from "hooks/useUser";
import { usePosts } from "hooks/usePosts";
import { CreatePost } from "@components/feed";

const Feed = () => {
  const { data } = useUser();

  const { data: postsData } = usePosts();

  useEffect(() => {
    if (!data?.currentUser) {
      router.push("/");
    }
  }, [data, postsData]);

  if (!data?.currentUser) {
    return <div>You are not logged in</div>;
  }

  return (
    <div className="py-8 w-full">
      <div className="flex justify-center">
        <div className="w-full max-w-lg lg:max-w-2xl">
          <CreatePost />

          {postsData && (
            <div className="space-y-5">
              {postsData!
                .slice()
                .reverse()
                .map((post) => (
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
