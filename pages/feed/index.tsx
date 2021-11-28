import { Post } from "@components/feed";

const index = () => {
  return (
    <div className="py-8 w-full">
      <div className="flex justify-center">
        <div className="space-y-5">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default index;
