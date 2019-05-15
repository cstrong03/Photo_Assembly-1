import axios from 'axios';
const URL = 'http://localhost:4567';

// for the photo/video/posts uploads.
const api = axios.create({
    baseURL: `${URL}/post`
})

export const fetchPost = async()=>{
  try {
    const resp = await api.get('/')
    console.log(resp);
    return resp.data.posts
  } catch (e) {
    console.log(e);
  }
}

export const createAPost = async(data)=>{
  try {
    const resp = await api.post('/', data)
    console.log(resp);
    return resp.data.newPost    //waiting to create posts
  } catch (e) {
    console.log(e);
  }
}

export const updatePosts = async(id, data)=>{
  try {
    const resp = await api.put(`/${id}`, data)
    console.log(resp);
    return resp.data.editPost
  } catch (e) {
    console.log(e);
  }
}

// for the users
