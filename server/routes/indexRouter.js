const express = require('express');
const router = express.Router();
const isAuth = require("../isAuth")

// router.get("/", (req,res) => {
//   res.send("hi home")
// });

router.get("/account", isAuth, (req,res) => {
  const user = {
    ...req.user,
    loggedIn: true
  }
  res.json(user);
});

module.exports = router;