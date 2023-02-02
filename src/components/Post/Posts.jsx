import React, { useContext } from 'react';
import PostContext from '../../contexts/PostContext';
import UserContext from '../../contexts/UserContext';
import Post from './Post';


const Posts = () => {
  const { posts } = useContext(PostContext);
  const { users } = useContext(UserContext);

  const activeUsers = users.filter(user => {
    return posts.some(post => post.userId === user.id)
  });

  return (
    <>
      {
        activeUsers.map(user => (
          <div key={user.id}>
            <div>
              {
                posts.filter(post => post.userId === user.id).map(post => (
                  <Post key={post.id} data={post} />
                ))
              }
            </div>
          </div>
        ))
      }
    </>
  );
}

export default Posts;