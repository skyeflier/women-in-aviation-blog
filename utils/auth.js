const withAuth = (req, res, next) => {
    if (!req.session.logged_in) { // If the user is not logged in, redirect the request to the login route
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth; 