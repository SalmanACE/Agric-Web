const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');

const errorController = require('./controllers/error');
const User = require('./models/user');
const Userauth = require('./models/userauth');

const MONGODB_URI =
  'mongodb+srv://Salman:Salman@cluster0.5mlkz.mongodb.net/agro?retryWrites=true&w=majority';

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});

// const store1 = new MongoDBStore({
//   uri: MONGODB_URI,
//   collection: 'session'
// });

const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');
const homeRoutes = require('./routes/home');
const aboutRoutes = require('./routes/about');
const sortRoutes = require('./routes/sort');
const weatherRoutes = require('./routes/weather');
const userauthRoutes = require('./routes/userauth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

// app.use(
//   session({
//     secret: 'Personal',
//     resave: false,
//     saveUninitialized: false,
//     store: store1
//   })
// );

app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  if(req.session.isLoggedIn){
  User.findById(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
  }
  else{
    Userauth.findById(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
  }
});

// app.use((req, res, next) => {
//   if (!req.session.user) {
//     return next();
//   }
//   Userauth.findById(req.session.user._id)
//     .then(user => {
//       req.user = user;
//       next();
//     })
//     .catch(err => console.log(err));
// });

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use((req, res, next) => {
  res.locals.isAuthenticate = req.session.isLogIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use('/admin', adminRoutes);
app.use('/home',homeRoutes);
app.use('/shop',shopRoutes);
app.use(sortRoutes);
app.use(authRoutes);
app.use('/weather',weatherRoutes);
app.use('/about',aboutRoutes);
app.use(userauthRoutes);


app.use(errorController.get404);

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
