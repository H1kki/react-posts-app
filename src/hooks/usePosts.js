import {useMemo} from "react";

export const useSortedPosts = (posts, selectedSort) => {
    const sortedPosts = useMemo(() => {
        console.log('memo')
        if(selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }, [selectedSort, posts])
    return sortedPosts
}

export const usePosts = (posts, selectedSort, search) => {
    const sortedPosts = useSortedPosts(posts, selectedSort)
    const searchedAndSortedPosts = useMemo(() => {
        return sortedPosts.filter(el => el.title.toLowerCase().includes(search.trim().toLowerCase()))
    }, [search, sortedPosts])

    return searchedAndSortedPosts
}