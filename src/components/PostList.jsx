import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import '../styles/App.css'

const PostList = ({posts, deletePost}) => {
    return (
        posts.length !== 0 ?

                <div>
                    <h1 style={{textAlign: "center"}}>Javascript posts</h1>
                    <TransitionGroup>
                        {posts.map((post, i) => <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post"
                        ><PostItem post={post} id={i} deletePost={deletePost}/></CSSTransition>)}
                    </TransitionGroup>
                </div>
        : <h1 style={{textAlign: "center"}}>Posts not found</h1>
    );
};

export default PostList;