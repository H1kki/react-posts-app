import React, {useEffect, useRef, useState} from "react";
import {useFetching} from "../hooks/useFetching";
import PostService from "../components/API/PostService";
import {getPagesCount} from "../utils/PagesCount";
import {usePosts} from "../hooks/usePosts";
import MyButton from "../components/UI/MyButton/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostsFilter from "../components/PostsFilter";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/Pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/UI/MySelect/MySelect";

function Posts() {

    const [posts, setPosts] = useState([])

    const [filters, setFilters] = useState({search:'', selectedSort: ''})

    const [modal, setModal] = useState(false)

    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const lastElement = useRef();

    const [fetchPosts, isLoading, error] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        console.log(response)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts();
    }, [page, limit])

    useObserver(isLoading, page < totalPages, lastElement, () => {
        setPage(page + 1)
    })

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const searchedAndSortedPosts = usePosts(posts, filters.selectedSort, filters.search)

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const changePage = (page) => {
        setPage(page)
    }


    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)} style={{margin: '5px 0'}}>
                Create Post
            </MyButton>
            <MyModal modal={modal} setModal={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostsFilter filters={filters} setFilters={setFilters}/>
            <MySelect value={limit} onChange={(value) => setLimit(value)} options={[{value: 5, name: '5'},
                {value: 10, name: '10'},
                {value: 25, name: '25'},
                {value: -1, name: 'Show all'}]
            } defaultValue='Choose loaded posts'/>
            <PostList posts={searchedAndSortedPosts} deletePost={deletePost}/>
            <div style={{height: 20, background: "red"}} ref={lastElement}/>
            {isLoading && <Loader/> }

            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>

        </div>
    );
}

export default Posts;