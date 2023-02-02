import UserInfo from '../User/UserInfo';
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { Link, Outlet } from 'react-router-dom';
import WebLogo from './WebLogo';

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <>
      { loggedInUser ? <UserInfo /> :
        <div className="loginRegister">
          <WebLogo />
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </div>
      }
      <hr className='line' />
      <Outlet />
    </>
  );
}

export default Header;