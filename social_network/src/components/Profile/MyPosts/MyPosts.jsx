import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let action = { type: "ADD-POST" };
    props.dispatch(action);
  };

  let onPostChange = () => {
    let action = {
      type: "UPDATE-NEW-POST-TEXT",
      newText: newPostElement.current.value,
    };
    props.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
