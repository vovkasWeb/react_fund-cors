import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) =>{
	const [post,setPost] = useState({title:'',body: ''});

	const addNewPost =(e) =>{
		e.preventDefault();
		const newPost = {
			...post, id: Date.now(),
		};
		create(newPost);
		setPost({ title: '', body: '' });
	}

	return(
      <form>
			<MyInput type='text' value={post.title} onChange={e=>setPost({...post, title: e.target.value})} placeholder="Назвагие поста"/>
			<MyInput type='text' value={post.body} onChange={e=>setPost({...post, body: e.target.value})} placeholder="Описание поста"/>
			<MyButton onClick={addNewPost}>Coздать пост</MyButton>
		</form>
	);
};

export default PostForm; 