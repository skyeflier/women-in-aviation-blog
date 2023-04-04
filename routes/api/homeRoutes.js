router.get('/login', (req, res) => {
    if (req.session.logged_in) { // If the user is already logged in, redirect the request to another route
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

module.exports = router;