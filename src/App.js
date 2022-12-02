/** @format */

import React, { useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

import "./styles/App.css";

function App() {
	const [post,setPost] =useState({title:'',body: ''});
	

	const bodyInputRef = useRef();
	const addNewPost = (e)=>{
		e.preventDefault();
		
	setPosts([...posts,{...post,id:Date.now()}]);
	setPost({title:'',body: ''});
	}
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
     

      <form>
			<MyInput type='text' value={post.title} onChange={e=>setPost({...post, title: e.target.value})} placeholder="Назвагие поста"/>
			<MyInput type='text' value={post.body} onChange={e=>setPost({...post, body: e.target.value})} placeholder="Описание поста"/>
			<MyButton onClick={addNewPost}>Coздать пост</MyButton>
		</form>
		<PostList posts={posts} title="Cписок постов 1"/>
    </div>
  );
}

export default App;
