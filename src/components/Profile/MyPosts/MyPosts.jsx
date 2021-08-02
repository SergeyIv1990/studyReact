import React from 'react';

import pop from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  let postElement = 
  props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)
  
  let newPostElement = React.createRef();

 /* let addPost = () => {
    props.addPost();
  }
let onPostChange = () =>{
  let text = newPostElement.current.value;
  props.updateNewPostText (text);
}
*/
let addPost = () => {
  props.dispatch({type:'ADD-POST'});
}
let onPostChange = () =>{
let text = newPostElement.current.value;
props.dispatch ({type:'UPDATE-NEW-POST-TEXT', newText: text});
}
  return (
    <div>
      <div className={pop.MyPost}>
        <h3> My post </h3>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement}
          value={props.newPostText}/>
          </div>
          <div>
          <button onClick={ addPost }>Add post</button>
          </div>
      </div>

      <div className={pop.posts} >
        {postElement}

      </div>
    </div>
  )

};

export default MyPosts;

        {/* 
          import postsData from '../../postsData'
          let postsData = [
    { id: 1,  post: 'Hi, how are you', likesCount:'10' },
    { id: 2, post: 'My first message', likesCount:'12' },
    { id: 3, post: 'How are you', likesCount:'8' },
    { id: 4, post: 'Hi-fi', likesCount:'11' },
    { id: 5, post: 'Foll good icr', likesCount:'16' },
    { id: 6, post: 'First', likesCount:'7' }
]
        <Post message={postsData[0].post} likesCount={postsData[0].likesCount} />
        <Post message={postsData[1].post} likesCount={postsData[1].likesCount} />
        <Post message={postsData[2].post} likesCount={postsData[2].likesCount}/>
        <Post message={postsData[3].post} likesCount={postsData[3].likesCount} />
        <Post message={postsData[4].post} likesCount={postsData[4].likesCount} />
        <Post message={postsData[5].post} likesCount={postsData[5].likesCount} />
        */}