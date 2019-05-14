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
    email: Sequelize.STRING,
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

User.hasMany(Post, {
    onDelete: 'cascade'
});
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
}
