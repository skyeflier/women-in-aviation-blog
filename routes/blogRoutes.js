const router = require('express').Router();
const { Blogs, User } = require('../models');

const withAuth = require('../utils/auth');

router.get('/blogs/:id', async (req, res) => {
    try {
        const blogData = await Blogs.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const blogDataClean = blogData.get({ plain: true });

        res.render('blog', {
            ...blogDataClean,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/blog/new', withAuth, async (req, res) => {
    try {
        res.status(200)
        res.render('newBlogForm')
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/blogs', withAuth, async (req, res) => {
    try {
        const newBlog = await Blogs.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        // Redirect to user's blog dashboard upon successful submission
        res.redirect('/dashboard');

    } catch (err) {
        res.status(400).json(err);
    }
});


router.delete('/blogs', withAuth, async (req, res) => {
    try {
        const deletedBlog = await Blogs.destroy({
            where: {
                id: req.body.id,
                user_id: req.session.user_id,
            },
        });

        if (!deletedBlog) {
            res.status(404).json({ message: 'No blogs found with this id!' });
            return;
        }

        res.status(200).json(deletedBlog);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/blog', async (req, res) => {
    try {
        const query = req.query.q;
        let blogData;

        if (query) {
            blogData = await Blogs.findAll({
                where: {
                    [Op.or]: [
                        { title: { [Op.like]: `%${query}%` } },
                        { description: { [Op.like]: `%${query}%` } },
                    ],
                },
                include: [
                    {
                        model: User,
                        attributes: ['name'],
                    },
                ],
            });
        } else {
            blogData = await Blogs.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['name'],
                    },
                ],
            });
        }

        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render('blogs', {
            blogs,
            query,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
