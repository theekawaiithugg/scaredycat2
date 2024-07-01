const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
}));

app.post('/logingin1', (req, res) => {
  const { username, password } = req.body;
  if (username === 'void' && password === 'void') {
    req.session.logged_in = true;
    res.redirect('/protected');
  } else {
    res.sendFile(path.join(__dirname, 'login2.html'));
  }
});

app.get('/logingin1', (req, res) => {
  res.sendFile(path.join(__dirname, 'login1.html'));
});

// Serve static files
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
