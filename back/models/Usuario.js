
const S = require('sequelize');
const crypto = require('crypto');
const db = require('../config/db');
const OrdenCompra = require('./OrdenCompra');

const Usuario = db.define('usuarios', {
  nombre: {
    type: S.STRING,
    allowNull: false
  },
  apellido: {
    type: S.STRING,
    allowNull: false
  },
  domicilio: {
    type: S.STRING,
    allowNull: false
  },
  email: {
    type: S.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: S.STRING,
    allowNull: false
  },
  salt: {
    type: S.STRING
  },
  isAdmin: {
    type: S.BOOLEAN
  }
});

Usuario.addHook('beforeCreate', (usuario) => {
  usuario.salt = crypto.randomBytes(20).toString('hex');
  usuario.password = Usuario.hashPassword(usuario.password);
});

// Usuario.belongsTo(OrdenCompra, { as: 'owner' });

Usuario.prototype.hashPassword = function (password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

Usuario.prototype.validPassword = function (password) {
  return this.password === this.hashPassword(password);
};

module.exports = {
  Usuario: Usuario,
  db: db
};
