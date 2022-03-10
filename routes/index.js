var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Post 1",
    user: "MJ",
    added: new Date()
  },
  {
    text: "Post 2",
    user: "DJ",
    added: new Date()
  },
  {
    text: "Post 3",
    user: "AW",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages: messages, title: 'Odin Mini Message Board' });
});

router.post('/new', function(req, res, next) {
  messageText = req.body.messageText;
  messageUser = req.body.authorName;
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/')
});

module.exports = router;
