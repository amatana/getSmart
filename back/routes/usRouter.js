const express = require('express');
const router = express.Router();
const { Usuario } = require('../models/Usuario');
const passport = require('passport');

router.post('/esAdm', (req, res) => {
  console.log(req.body, '000000000000000000000000000000');
  Usuario.findOne({ where: { email: req.body.email } })
    .then(data => {
      return data.update({ isAdmin: true }, { where: { isAdmin: false } });
    })
    .then(data => res.send(data));
});

router.get('/todos', (req, res) => {
  if (!req.user.dataValues.nombre) res.send(404, 'cantfindthat');
  res.send(req.user.dataValues.nombre);
});

router.post('/crea', (req, res) => {
  console.log(req.body.user);
  Usuario.create(req.body.user)
    .then(data => res.status(201).send(data));
});

router.get('/failurelogin', (req, res) => {
  res.send('cantfindthat');
});

router.get('/user', (req, res) => {
  res.send(req.user);
});

router.get('/logOut', (req, res) => {
  req.logout();
  res.send({});
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  if (req.isAuthenticated()) {
    res.send(req.user);
  }
});

module.exports = router;
