const sequelize = require('../config/connection');
const { User, Blogs } = require('../models');

const userData = require('./userData');
const blogData = require('./blogData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        // returning: true,
    });
    const createdUsers = await User.findAll()

    for (const blogData of blogsData) {
        await Blogs.create({
            ...blogData,
            type: blogData.type,
            user_id: createdUsers[Math.floor(Math.random() * createdUsers.length)].id,
        });
    }
};

seedDatabase();