const { Sequelize } = require('sequelize')
const bcrypt = require('bcrypt')

const db = new Sequelize({
  database: 'photo_db',
  dialect: 'postgres',
  define: {
    underscored: true
  },
})

const User = db.define('user', {
    email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isEmail: true
          }
    },
    username: {
        type: Sequelize.STRING,
        unique: true
    },
    password: Sequelize.STRING,
    avatar: Sequelize.STRING,
    description: Sequelize.TEXT
});

const Post = db.define('post', {
    image_url: Sequelize.STRING,
    caption: Sequelize.TEXT,
    user_id: Sequelize.INTEGER
    // like: Sequelize.INTEGER
});

const Comment = db.define('comment', {
    user_id: Sequelize.INTEGER,
    comment: Sequelize.TEXT
})
// const Like = db.define('like', {
//     user_id: Sequelize.INTEGER,
//     post_id: Sequelize.INTEGER
// })

User.hasMany(Post, {
    onDelete: 'cascade'
});
// User.hasMany(Like, {
//     onDelete: 'cascade'
// })
User.hasMany(Comment, {
    onDelete: 'cascade'
});
Post.hasMany(Comment, {
    onDelete: 'cascade'
})
// Post.hasMany(Like, {
//     onDelete: 'cascade'
// })



Comment.belongsTo(User)
Comment.belongsTo(Post)
// Like.belongsTo(User)
// Like.belongsTo(Post)
Post.belongsTo(User)

User.beforeCreate( async (user, options) => {
    const hashedPassword = await bcrypt.hash(user.password, 12) 
      user.password = hashedPassword;
    });

module.exports = {
  db,
  User,
  Post,
  Comment
//   Like
}
