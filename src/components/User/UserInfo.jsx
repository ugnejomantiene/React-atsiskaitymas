import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import WebLogo from "../Menu/WebLogo";

const UserInfo = () => {

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const navigation = useNavigate();

  const logOutUser = () => {
    setLoggedInUser(null);
    navigation('/');
  }

  return (
    <div className="UserInfo">
      <div className="ublock">
        <WebLogo />
        <Link to="/">HOME</Link>
      </div>
      <div className="ublock">
        <Link to="/newPost">Add post</Link>
       
        <button onClick={() => logOutUser()}>LogOut</button>
      </div>
    </div>
  );
}

export default UserInfo;