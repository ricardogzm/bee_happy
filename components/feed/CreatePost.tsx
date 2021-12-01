import {
  faImage,
  faPaperPlane,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { FocusEvent } from "react";
import { Input } from "@components/ui";
import { usePosts } from "hooks/usePosts";
import { TextArea } from "@components/ui";
import { useContext, useState } from "react";
import { ChangeEvent, FormEvent } from "react";
import { UserContext } from "contexts/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CreatePost = () => {
  const { data: userData } = useContext(UserContext);
  const { mutate: postsMutate } = usePosts();

  const [minRows, setMinRows] = useState(1);
  const [postContent, setPostContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const focusHandler = (event: FocusEvent<HTMLTextAreaElement>) => {
    setMinRows(3);
  };

  const blurHandler = (event: FocusEvent<HTMLTextAreaElement>) => {
    if (postContent === "") setMinRows(1);
  };

  const imageHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const imgFile = event.target.files![0];
    setImage(imgFile ? imgFile : null);

    event.target.value = "";
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let isPosted;
    let postid;

    // Creates post
    await axios
      .post("/api/posts/createpost", {
        userid: userData?.currentUser.id,
        text: postContent,
      })
      .catch((error) => console.error(error))
      .then((response) => {
        if (response!.status === 201) {
          postsMutate();
          postid = response!.data._id;

          isPosted = true;
          setPostContent("");
          setMinRows(1);
        }
      });

    // Uploads image if any
    if (isPosted && image !== null) {
      const fd = new FormData();
      fd.append("image", image, image.name);

      await axios
        .post(`/api/posts/uploadimage/${postid}`, fd)
        .catch((error) => console.error(error))
        .then((response) => {
          if (response!.status === 200) {
            postsMutate();
            setImage(null);
          }
        });
    }
  };

  return (
    <div
      tabIndex={0}
      className="mb-4 p-3 w-full max-w-full border border-gray-200 rounded-md shadow-md"
    >
      <form onSubmit={onSubmit} id="postform">
        <label htmlFor="post-input" className="text-sm font-medium">
          {`Tú - ${userData?.currentUser.username}`}
        </label>
        <TextArea
          id="post-input"
          name="post-input"
          placeholder="🐝 Bzzzzz... escribe algo... "
          className="text-sm rounded-md"
          autoComplete="off"
          value={postContent}
          onChange={(e) => {
            setPostContent(e.target.value);
          }}
          minRows={minRows}
          onFocus={focusHandler}
          onBlur={blurHandler}
        />

        <div className="flex justify-between">
          <div>
            <Input
              type="file"
              name="image"
              id="image"
              onChange={imageHandler}
              accept=".png, .jpg, .jpeg"
              className="hidden"
            />
            <label
              htmlFor="image"
              className="block p-2 text-sm hover:bg-gray-100 bg-white border border-gray-300 rounded-md cursor-pointer transition-colors"
            >
              <span className="text-base">
                <FontAwesomeIcon icon={faImage} className="mr-1 text-base" />
              </span>
              <span>Subir imagen</span>
            </label>
          </div>

          <button
            type="submit"
            className="p-2 text-sm hover:bg-yellow-200 bg-yellow-300 rounded-md transition-colors"
          >
            <span className="text-base">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-1" />
            </span>
            <span>Publicar</span>
          </button>
        </div>

        {image && (
          <div className="flex items-center mt-2 px-2 py-1 w-min max-w-full bg-gray-200 rounded-md">
            <button
              onClick={(e) => setImage(null)}
              className="flex justify-center pr-2"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <p className="text-sm truncate">{image!.name}</p>
          </div>
        )}
      </form>
    </div>
  );
};
