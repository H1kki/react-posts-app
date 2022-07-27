import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../components/API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getPostById(id)
        setPost(response.data)
    })
    const [fetchPostCommentsById, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getPostCommentsById(id)
        console.log(response)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchPostCommentsById(params.id)
    }, [])
    console.log(comments)
    return (
        <div>
            <h1>Страница поста c ID {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            {isComLoading
                ? <Loader/>
                : <div>{comments.map(com => <div style={{marginTop: 5}} key={com.id}><h5>{com.email}</h5><div>{com.body}</div></div>)}</div>
            }
        </div>
    );
};

export default PostPage;