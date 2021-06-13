module.exports = (req, res, next) => {
    if (!req.session.isLogIn) {
        return res.redirect('/login');
    }
    next();
}