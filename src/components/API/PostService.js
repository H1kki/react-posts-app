import axios from "axios";

export default class PostService {
    static async getAll(limit, page) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        console.log(response)
        return response
    }

    static async getPostById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response
    }

    static async getPostCommentsById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments` )
        return response
    }
}