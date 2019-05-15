import axios from 'axios';
const URL = 'http://localhost:4567';

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



// export const getUser = async () => {
//     try {
//         const resp = await api.get('/user')
//         return resp.data;
//     } catch (e) {
//         console.log(e);
//     }
// }
//
// export const createAPost = async (data) => {
//     try {
//         const resp = await api.post('/post', data)
//         console.log(resp)
//         return resp.data
//     } catch (e) {
//         console.log(e)
//     }
// }
