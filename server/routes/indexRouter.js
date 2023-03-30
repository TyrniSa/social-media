const express = require('express');
const router = express.Router();
const isAuth = require("../isAuth")
const pool = require("../db");

// router.get("/", (req,res) => {
//   res.send("hi home")
// });

router.get("/account", isAuth, (req, res) => {
  const user = {
    ...req.user,
    loggedIn: true
  }
  res.json(user);
});

router.post("/new_post", isAuth, async (req, res) => {
  await pool.query("INSERT INTO posts (body, user_id) VALUES ($1, $2)", [req.body.post, req.user.id]);
  res.status(200).send();
})

router.get("/feed", isAuth, async (req, res) => {
  const cursor = req.query.cursor;
  const posts = await pool.query(
    "SELECT u.username, u.img, p.id, p.body FROM users u INNER JOIN posts p ON u.id = p.user_id " +
    "ORDER BY p.id DESC LIMIT 5 OFFSET $1", [cursor]);
  res.send({ cursor: cursor * 1 + 5, posts: posts.rows });
});

router.get("/my_posts", isAuth, async (req, res) => {
  const cursor = req.query.cursor;
  const posts = await pool.query(
    "SELECT u.username, u.img, p.id, p.body FROM users u INNER JOIN posts p ON u.id = p.user_id " +
    "WHERE p.user_id = $1 ORDER BY p.id DESC LIMIT 5 OFFSET $2", [req.user.id, cursor]);
  res.send({ cursor: cursor * 1 + 5, posts: posts.rows });
});

module.exports = router;