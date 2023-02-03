import PostContext from "../../contexts/PostContext";
import UserContext from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPostForm = () => {

  const [formInputs, setFormInputs] = useState({
    heading: '',
    content: ''
  });

  const { createPost } = useContext(PostContext);
  const { loggedInUser } = useContext(UserContext);

  const navigation = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const newPost = {
      heading: formInputs.heading,
      content: formInputs.content,
      id: Date.now(),
      userId: loggedInUser.id
    };

    createPost(newPost);
    navigation('/');
  }

  return (
    <>
      <div className="FormAddPost">
        <form onSubmit={handleSubmit}>
          <label>
            Heading:
            <input type="text" name="heading"
              value={formInputs.heading}
              onChange={(e) => setFormInputs({ ...formInputs, heading: e.target.value })}
            />
          </label>
          <label>
            Content:
            <input type="text" name="content"
              value={formInputs.content}
              onChange={(e) => setFormInputs({ ...formInputs, content: e.target.value })}
            />
          </label>
          <input type="submit" value="Create new Post" />
        </form>
      </div>
    </>
  );
}

export default NewPostForm;