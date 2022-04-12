import { comment } from "hooks/usePosts";

export const Comment = ({ _id, date, user, text }: comment) => {
  return (
    <div className="px-3 py-2 bg-gray-200 rounded-md">
      <p className="text-sm font-medium">{user.username}</p>
      <span className="text-gray-400 text-xs">{date}</span>
      <p className="text-gray-800 text-sm">{text}</p>
    </div>
  );
};
