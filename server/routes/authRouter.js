const express = require('express');
const router = express.Router();
const passport = require('passport');
require('dotenv').config();

// router.get("/", (req, res) => {
//   res.send("auth")
// });

router.get("/google", passport.authenticate("google", {
  scope: "profile",
}
));

router.get("/google/callback", passport.authenticate("google", {
  session: true,
}), (req, res) => {
  res.redirect(`${process.env.CLIENT_URL}`)
}
);

module.exports = router;