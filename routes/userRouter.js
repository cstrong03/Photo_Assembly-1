const express = require('express');
const { User, Post } = require('../models');
const userRouter = express.Router();

userRouter.get('/', async (request, response) =>
{
  try {
    const users = await User.findAll();
    response.json({users})
  } catch (e) {
    response.status(500).json({ msg: e.message })
  }
})

userRouter.get('/:id', async (request, response) => {
    try {
        const id = request.params.id
        const oneUser = await User.findAll({
            where: {
                id: id
            }
        })
        response.json(oneUser)
    } catch (e) {
        console.log(e)
    }
})

userRouter.delete('/:id', async (request, response) => {
    try {
        const id = request.params.id
        const deleteUser = await User.destroy({
            where: {
                id: id
            }
        })
        response.send(`User ${id} Deleted!`)
    } catch (e) {
        console.log(e)
    }
})

userRouter.put('/:id', async (request, response) => {
    try {
        const id = request.params.id
        const editUser = await User.findByPk(id)
        if (editUser) await editUser.update(request.body)
        response.json(editUser)
    } catch (e) {
        console.log(e)
    }
})

userRouter.get('/:id/posts', async (request, response) => {
    try {
        const id = request.params.id
        const allPostsByUser = await Post.findAll({
            where: {
                user_id: id
            }
        })
        response.json(allPostsByUser)
    } catch (e) {
        console.log(e)
    }
})


module.exports = {
    userRouter
}