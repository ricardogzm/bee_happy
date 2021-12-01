import {
  faComments,
  faEllipsisH,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";
import { Comment, CommInput } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Post as PostType } from "hooks/usePosts";

export const Post = ({
  _id,
  userid,
  username,
  date,
  text,
  likes,
  image,
}: PostType) => {
  const dateString = new Date(date).toLocaleDateString("es-MX", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const [commentsVisible, setCommentsVisible] = useState(false);

  return (
    <div className="w-full border border-gray-200 rounded-md shadow-md">
      <div className="relative mx-4 my-3">
        {/* Post menu button */}
        <div className="absolute right-0 top-0 px-1 text-gray-500 hover:text-gray-800 text-lg hover:bg-gray-200 rounded-full">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>

        {/* Post content */}
        <div>
          <p className="text-lg font-semibold">{username}</p>
          <span className="text-gray-400 text-sm">{dateString}</span>
          <p className="text-gray-800 text-sm">{text}</p>
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
        <div className="flex justify-around mb-4 text-gray-500 text-2xl select-none">
          <FontAwesomeIcon
            icon={faComments}
            className="hover:text-gray-800 cursor-pointer transition-colors"
            onClick={(e) => setCommentsVisible(!commentsVisible)}
          />

          <div>
            <FontAwesomeIcon
              icon={faHeart}
              className="hover:text-gray-800 cursor-pointer transition-colors"
            />
            <span className="ml-2">{likes}</span>
          </div>
        </div>

        {/* Comments Container */}
        {commentsVisible && (
          <div className="border-t border-gray-300">
            <CommInput />
            <div className="space-y-2">
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
