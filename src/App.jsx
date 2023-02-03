import './App.css';
import Header from './components/Menu/Header';
import Main from './components/Main';
import Register from './components/Menu/Register';
import Login from './components/Menu/Login';
import UserPage from './components/User/UserPage';
import NewPostForm from './components/Post/NewPostForm';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Menu/Footer';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Main />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/newPost" element={<NewPostForm />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;