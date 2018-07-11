const session = require('client-sessions');
const db = require('../db.js');
const STATUS_OK = 200;
const STATUS_USER_ERROR = 422;
const STATUS_SERVER_ERROR = 500;

const createUser = (req, res) => {
  const {username, password } = req.body;
  console.log(username);
  console.log(password);
  const user = {username, password};
  db
    .insert(user)
    .into('userTable')
    .then((user) => {
      res.status(STATUS_OK).json({created: user})
    })
    .catch(err => {
      res.status(STATUS_SERVER_ERROR).json({ error: err.message });
    });

}

const loginUser = (req, res) => {
  const usernameReq = req.body.username;
  const passwordReq = req.body.password;
  db('userTable')
    .where('username', usernameReq)
    .then((post) => {
      if (post.length === 0) {
        console.log('incorrect username and/or password');
        return;
      }
      if (post[0].password !== passwordReq) {
        console.log('incorrect username and/or password');
        return;
      }
      req.session.username = usernameReq;
      req.session.password = passwordReq;
      console.log('session', req.session.username)
      res.json(req.session.username);
    })
    .catch(function(err) {
      res.status(500).json({ error: err.messsage });
    });
  /*
  User.findOne({username}, (err, user) => {
    if (err || user === null) {
      res.status(422).json(err);
    }
    if (err || password !== user.password) {
      res.status(422).json(err);
    }
  })
  */
}
const logoutUser = (req, res) => {
  req.session.destroy();
  //req.session.username = undefined;
  res.status(200).json({ success: true });
}
const getUsername = (req, res) => {
  const { username } = req.session;
  // mySession = req.session;
  console.log('username: ', req.session.username);
  res.status(200).json(req.session.username);
}
module.exports = {
  loginUser,
  createUser,
  getUsername,
  logoutUser
}