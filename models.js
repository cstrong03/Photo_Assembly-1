const { Sequelize } = require('sequelize')

const db = new Sequelize({
  database: 'photo_db',
  dialect: 'postgres',
  define: {
    underscored: true
  },
})

const User = db.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    avatar: Sequelize.STRING
});

const Post = db.define('post', {
    image_url: Sequelize.STRING,
    caption: Sequelize.TEXT,
    user_id: Sequelize.INTEGER
});

const Comment = db.define('comment', {
    user_id: Sequelize.INTEGER,
    comment: Sequelize.TEXT
})
const Likes = db.define('like', {
    user_id: Sequelize.INTEGER,
    post_id: Sequelize.INTEGER
})

User.hasMany(Post, {
    onDelete: 'cascade'
});
User.hasMany(Likes, {
    onDelete: 'cascade'
})
User.hasMany(Comment, {
    onDelete: 'cascade'
});
Post.hasMany(Comment, {
    onDelete: 'cascade'
})

// Comment.hasOne(Post, {
//     onDelete: 'cascade'
// })

Comment.belongsTo(User)
Comment.belongsTo(Post)
Likes.belongsTo(User)
Likes.belongsTo(Post)
Post.belongsTo(User)



module.exports = {
  db,
  User,
  Post,
  Comment,
  Likes
}
