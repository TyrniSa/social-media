const passport = require('passport');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
require('dotenv').config();
const pool = require("./db")

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
},
  async (accessToken, refreshToken, profile, done) => {
    const account = profile._json;
    let user = {};

    try {
      //check if user already is in db
      const currentUser = await pool.query("SELECT * FROM users WHERE google_id = $1", [account.sub]);
      if (currentUser.rows.length === 0) {
        //if no, create user
        await pool.query(
          "INSERT INTO users (username, img, google_id) VALUES ($1, $2, $3)",
          [account.name, account.picture, account.sub]
        );

        //use created user
        const id = await pool.query("SELECT id FROM users WHERE google_id = $1", [
          account.sub,
        ]);
        user = {
          id: id.rows[0].id,
          username: account.name,
          img: account.picture,
        };

      } else {
        //if yes, use user from db
        user = {
          id: currentUser.rows[0].id,
          username: currentUser.rows[0].username,
          img: currentUser.rows[0].img,
        };
      }
      done(null, user);
    } catch (error) {
      done(error);
    }
  })
);

passport.serializeUser((user, done) => {
  // loads into req.session.passport.user
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // loads into req.user
  done(null, user);
});