/** @format */

import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {
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

  return (
    <div className="App">
      {/* <PostItem post={{ id: 1, title: "JavaSript", body: "Desription" }} />
		<PostItem post={{ id: 2, title: "Java", body: "D887" }} /> */}
      <PostList posts={posts} title="Cписок постов 1"/>
		<PostList posts={posts2} title="Cписок постов 2"/>
    </div>
  );
}

export default App;
