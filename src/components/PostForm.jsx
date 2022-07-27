import React, {useState} from 'react';
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        post.title.trim() && post.body.trim() ? create({...post, id: Date.now()}) : console.log('Pusto')
        setPost({title: '', body: ''})
    }
    return (
        <form>
            <MyInput type={'text'} placeholder={'Title'} value={post.title} onChange={(e) => setPost({...post, title: e.target.value})}/>
            <MyInput type={'text'} placeholder={'Description'} value={post.body} onChange={(e) => setPost({...post, body: e.target.value})}/>
            <MyButton onClick={(e) => addNewPost(e)}>Add</MyButton>
        </form>
    );
};

export default PostForm;