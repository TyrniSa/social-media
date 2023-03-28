const express = require("express");
require('dotenv').config();
const app = express();
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');



//initialize middleware
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {
    secure: process.env.NODE_ENV === "production" ? "true" : "auto",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  },
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

//import routes
const indexRouter = require("./routes/indexRouter");
const authRouter = require("./routes/authRouter");

//initialize routes
app.use('/', indexRouter);
app.use('/auth', authRouter);

//app listen
const PORT = process.env.PORT;
app.listen(PORT || 4000, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})