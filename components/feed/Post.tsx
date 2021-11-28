import {
  faComments,
  faEllipsisH,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";
import { Comment, CommInput } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Post = () => {
  const [commentsVisible, setCommentsVisible] = useState(false);

  return (
    <div className="w-full max-w-lg border border-gray-200 rounded-md shadow-md lg:max-w-2xl">
      <div className="relative mx-4 my-3">
        {/* Post menu button */}
        <div className="absolute right-0 top-0 px-1 text-gray-500 hover:text-gray-800 text-lg hover:bg-gray-200 rounded-full">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>

        {/* Post content */}
        <div>
          <p className="text-lg font-semibold">Alfonso Ramírez</p>
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            aliquid laborum consequuntur ex inventore nostrum voluptatum quod
            cum nesciunt praesentium?
          </p>
          <div className="h-[28rem] relative my-3 w-full">
            <Image
              src="/bee-header.webp"
              layout="fill"
              className="rounded-md"
              alt="Bee"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Buttons - Likes and comments */}
        <div className="flex justify-around mb-4 text-gray-500 text-2xl select-none">
          <FontAwesomeIcon
            icon={faComments}
            className="hover:text-gray-800 cursor-pointer transition-colors"
            onClick={(e) => setCommentsVisible(!commentsVisible)}
          />

          <FontAwesomeIcon
            icon={faHeart}
            className="hover:text-gray-800 cursor-pointer transition-colors"
          />
        </div>

        {/* Comments Container */}
        {commentsVisible && (
          <div className="border-t border-gray-200">
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
