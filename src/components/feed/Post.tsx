import {
  faComments,
  faEllipsisH,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useContext, useState } from "react";
import { Comment, CommInput } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Post as PostType, usePosts } from "hooks/usePosts";
import { UserContext } from "contexts/UserContext";
import axios from "axios";

export const Post = ({
  _id,
  userid,
  username,
  date,
  text,
  likes,
  image,
  comments,
}: PostType) => {
  const [commentsVisible, setCommentsVisible] = useState(false);

  const { data: userData } = useContext(UserContext);
  const { mutate: postsMutate } = usePosts();

  const dateString = new Date(date).toLocaleDateString("es-MX", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const likePost = async () => {
    await axios
      .post(
        "/api/posts/likepost",
        {},
        {
          params: {
            postId: _id,
            userId: userData?.currentUser.id,
          },
        }
      )
      .catch((error) => console.error(error))
      .then((response) => {
        if (response!.status === 200) {
          postsMutate();
        }
      });
  };

  return (
    <div className="w-full border border-gray-200 rounded-md shadow-md">
      <div className="relative mx-4 my-3">
        {/* Post menu button */}
        <div className="absolute right-0 top-0 px-1 text-gray-500 hover:text-gray-800 text-lg hover:bg-gray-200 rounded-full">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>

        {/* Post content */}
        <div>
          <span className="block text-lg font-semibold">{username}</span>
          <span className="text-gray-400 text-xs">{` publicado el ${dateString}`}</span>
          <p className="pb-2 text-gray-800 text-sm">{text}</p>
          {image && (
            <div className="h-[28rem] relative my-3 w-full">
              <Image
                src={`http://localhost/api/posts/image?filename=${image}`}
                layout="fill"
                className="rounded-md"
                alt="Bee"
                objectFit="cover"
              />
            </div>
          )}
        </div>

        {/* Buttons - Likes and comments */}
        <div className="flex justify-around pt-3 text-gray-500 text-2xl border-t border-gray-300 select-none">
          <div>
            <FontAwesomeIcon
              icon={faComments}
              className="hover:text-gray-800 cursor-pointer transition-colors"
              onClick={(e) => setCommentsVisible(!commentsVisible)}
            />
            <span className="ml-2">{comments?.length}</span>
          </div>

          <button onClick={(e) => likePost()}>
            <FontAwesomeIcon
              icon={faHeart}
              className="hover:text-gray-800 cursor-pointer transition-colors"
            />
            <span className="ml-2">{likes.length}</span>
          </button>
        </div>

        {/* Comments Container */}
        {commentsVisible && (
          <div className="mt-3 border-t border-gray-300">
            <CommInput
              userid={userData!.currentUser.id}
              username={userData!.currentUser.username}
              postId={_id}
            />
            {comments && (
              <div className="space-y-2">
                {comments
                  .slice()
                  .reverse()
                  .map((comment) => (
                    <Comment {...comment} key={comment._id} />
                  ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
