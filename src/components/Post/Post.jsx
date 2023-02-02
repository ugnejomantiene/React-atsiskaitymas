import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

const Post = ({ data, postContent }) => {
  const { users } = useContext(UserContext);

  const postOwner = users.find(user => user.id === data.userId);

  return (
    <>
      <div className="Post">
        <img
          src={postOwner.avatar}
          alt="user avatar"
        />
        <span>{postOwner.userName}</span>
        <hr />
        <h1>{data.heading}</h1>
        <p>{data.content}</p>
        <p>{postContent}</p>
      </div>
    </>
  );
}

export default Post;