import axios from "axios";
import { FormEvent, useState } from "react";
import { Input, TextArea } from "@components/ui";
import { usePosts } from "hooks/usePosts";

interface ICommProps {
  userid: string;
  username: string;
  postId: string;
}

export const CommInput = ({ userid, username, postId }: ICommProps) => {
  const [commentContent, setCommentContent] = useState("");
  const { mutate: postsMutate } = usePosts();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (commentContent === "") return;

    await axios
      .post(
        "/api/posts/createcomment",
        {
          comment: commentContent,
        },
        { params: { postId, userId: userid } }
      )
      .catch((error) => console.error(error))
      .then((response) => {
        if (response!.status === 200) {
          postsMutate();
          setCommentContent("");
        }
      });
  };

  return (
    <div className="pb-2 pt-3 w-full">
      <form onSubmit={onSubmit}>
        <label htmlFor="comm-input" className="text-sm font-medium">
          Tú - {username}
        </label>
        <TextArea
          id="comm-input"
          name="comm-input"
          placeholder="Escribe un comentario..."
          className="text-sm rounded-md"
          onChange={(e) => setCommentContent(e.target.value)}
          value={commentContent}
          autoComplete="off"
        />
        <button
          className="px-2 py-1 text-sm border border-gray-300 rounded-md"
          type="submit"
        >
          Publicar comentario
        </button>
      </form>
    </div>
  );
};
