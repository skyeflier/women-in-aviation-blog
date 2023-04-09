const User = require('./user');
const Blogs = require('./blog');

Blogs.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Blogs, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Blogs };