/** @format */

import React, { useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import "./styles/App.css";

function App() {
  const bodyInputRef = useRef();

  const [posts, setPosts] = useState([
    { id: 1, title: "JavaSript", body: "Desription" },
    { id: 2, title: "Java", body: "D887" },
    { id: 3, title: "Java", body: "D887" },
  ]);

  const [posts2, setPosts2] = useState([
    { id: 1, title: "JavaSript2", body: "Desription" },
    { id: 2, title: "Java2", body: "D887" },
    { id: 3, title: "Java2", body: "D887" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
		{posts.length?
      <PostList
		remove={removePost}
        posts={posts}
        title="Cписок постов 1"
      />
		:<h1 style={{textAlign:"center"}}>Посты не найдены!</h1>}
    </div>
  );
}

export default App;
