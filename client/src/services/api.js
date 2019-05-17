import axios from 'axios';
const URL = 'http://localhost:4567';

// for the photo/video/posts uploads.
const api = axios.create({
    baseURL: `${URL}`
})

export const fetchPost = async()=>{
  try {
    const resp = await api.get('/post')
    console.log(resp);
    return resp;
  } catch (e) {
    console.log(e);
  }
}

export const fetchUserPost = async(id)=>{
  try{
const resp = await api.get(`/user/${id}`)
console.log(resp);
return resp.data.allPostsByUser
  } catch(e){
    console.log(e)
  }
}


export const createAPost = async(data)=>{
  try {
    const resp = await api.post('/post/create', data)
    console.log(resp);
    return resp.data    //waiting to create posts
  } catch (e) {
    console.log(e);
  }
}

export const updatePosts = async(id, data)=>{
  console.log(id, data)
  try {
    const resp = await api.put(`/post/${id}`, data)
    console.log(resp);
    return resp.data.editPost
  } catch (e) {
    console.log(e);
  }
}

export const deletePosts = async(id, data)=>{
  try {
    const resp = await api.destroy(`/post/${id}`, data)
    console.log(resp)
    return resp.data
  } catch (e) {
    console.log(e);
  }
}

// for the users
export const getUser = async()=>{
  try {
    const resp = await api.get(`/user`)
    return resp.data.user
  } catch (e) {
    console.log(e)
  }
}
export const getAUser = async(id)=>{
  try {
    const resp = await api.get(`/user/${id}`)
    return resp.data[0];
  } catch (e) {
    console.log(e)
  }
}

export const createUser = async(data)=>{
  try {
    const resp = await api.post('/auth/signup', data)
    console.log(resp.data);
    return resp.data
  } catch (e) {
  console.log(e);
  }
}

export const editAUser = async(id, data)=>{
  try {
    const resp = await api.put(`/user/${id}`, data)
    console.log(resp);
    return resp.data.editUser
  } catch (e) {
    console.log(e);
  }
}

export const deleteAUser = async(id, data)=>{
  try {
    const resp = await api.delete(`/user/${id}`, data)
    console.log(resp)
    return resp.data.deleteUser
  } catch (e) {
    console.log(e);
  }
}

export const loginUser = async(data)=>{
  try {
    const resp = await api.post(`/auth/login`, data)
    console.log(resp)
    return resp.data
  } catch (e) {
    console.log(e);
  }
}

export const uploadStuff = async(data) => {
  try {
    const resp = await axios({
      method: "POST",
      url:`${URL}/image-upload`,
      data: data,
      headers: {
        "Content-Type": "image/jpeg",
        "x-amz-meta-fieldname": "image"
      }
    })
    console.log(resp)
    return resp.data.imageUrl
  } catch (e) {
    console.log(e)
  }
}
