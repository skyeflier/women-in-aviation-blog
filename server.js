const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const moments = require('moment')

// Set up Handlebars.js engine
const hbs = exphbs.create();
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'shh...this is a secret',
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
};

app.use(session(sess));

// Serve static files with the correct MIME type
app.use('/public', express.static(path.join(__dirname, 'public'), {
    // Set the Content-Type header for .css files to text/css
    setHeaders: (res, filePath) => {
        if (path.extname(filePath) === '.css') {
            res.setHeader('Content-Type', 'text/css');
        }
    }
}));

// Inform Express.js on which template engine to use
// Use handlebars engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Clear prop! Now listening for that sweet Lycoming purr... http://localhost:' + PORT));
});

console.log('Welcome to the Women in Aviation Blog! We can not wait to hear your stories as a woman in aviation. ');