const express = require('express');
const { Post, User, Comment } = require('../models');
const postRouter = express.Router();

postRouter.get('/', async (request, response) =>
{
  try {
    const posts = await Post.findAll({
        include: [{ 
            model: User, 
            attributes: ["username", "avatar"] },
            { model: Comment, 
            attributes: ["comment", "createdAt"],  
                include: [{model: User, attributes: ["username"]}]
        }
        ]
    });
    response.json({posts})
  } catch (e) {
    response.status(500).json({ msg: e.message })
  }
})

// postRouter.get('/user/', async (request, response) =>
// {
//     try {
//       const posts = await Post.findAll({
//           include: [{ model: User, attributes: "username" }]
//       });
//       response.json({posts})
//     } catch (e) {
//       response.status(500).json({ msg: e.message })
//     }
//   })

postRouter.get('/:id', async (request, response) => {
    try {
        const id = request.params.id
        const onePost = await Post.findAll({
            where: {
                id: id
            }
        })
        response.json(onePost)
    } catch (e) {
        console.log(e)
    }
})

postRouter.delete('/:id', async (request, response) => {
    try {
        const id = request.params.id
        const deletePost = await Post.destroy({
            where: {
                id: id
            }
        })
        response.send(`Post ${id} Deleted!`)
    } catch (e) {
        console.log(e)
    }
})

postRouter.put('/:id', async (request, response) => {
    try {
        const id = request.params.id
        const editPost = await Post.findByPk(id)
        if (editPost) await editPost.update(request.body)
        response.json({editPost})
    } catch (e) {
        console.log(e)
    }
})

postRouter.post('/create', async (request, response) => {
    try {
        const newPost = await Post.create(request.body)
        response.json(newPost)
    } catch (e) {
        console.log(e)
    }
})


module.exports = {
    postRouter
}