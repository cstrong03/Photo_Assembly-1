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

export const deletePosts = async(id, data)=>{
  try {
    const resp = await api.destroy(`/${id}`, data)
    console.log(resp)
    return resp.data.deletePost
  } catch (e) {
    console.log(e);
  }
}

// for the users
export const getUser = async()=>{
  try {
    const resp = await api.get('/')
    console.log()
    return resp.data.users
  } catch (e) {
    console.log(e)
  }
}

// export const createUser = async(data)=>{
//   try {
//     const resp = await api.post('/', data)
//     console.log(resp);
//     return resp.data
//   } catch (e) {
//   console.log(e);
//   }
// }

export const editAUser = async(id, data)=>{
  try {
    const resp = await api.put(`/${id}`, data)
    console.log(resp);
    return resp.data.editUser
  } catch (e) {
    console.log(e);
  }
}

export const deleteAUser = async(id, data)=>{
  try {
    const resp = await api.delete(`/${id}`, data)
    console.log(resp)
    return resp.data.deleteUser
  } catch (e) {
    console.log();
  }
}
