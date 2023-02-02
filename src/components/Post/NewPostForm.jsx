import PostContext from "../../contexts/PostContext";
import UserContext from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPostForm = () => {
  const [inputs, setInputs] = useState({ heading: "", content: "" });
  const { addNewPost } = useContext(PostContext);
  const { loggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const post = {
      heading: inputs.heading,
      content: inputs.content,
      id: Date.now(),
      userId: loggedInUser.id
    };
    addNewPost(post);
    navigate("/");
  };

  return (
    <div className="FormAddPost">
      <form onSubmit={handleSubmit}>
        <label>
          Heading:
          <input
            type="text"
            name="heading"
            value={inputs.heading}
            onChange={event =>
              setInputs({ ...inputs, heading: event.target.value })
            }
          />
        </label>
        <label>
          Content:
          <input
            type="text"
            name="content"
            value={inputs.content}
            onChange={event =>
              setInputs({ ...inputs, content: event.target.value })
            }
          />
        </label>
        <input type="submit" value="Create new Post" />
      </form>
    </div>
  );
};

export default NewPostForm;