'use strict';
const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Post = sequelize.define("post", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },

  idUSERS: { allowNull: false, type: Sequelize.INTEGER },

  title: { allowNull: false, type: Sequelize.STRING },

  content: { allowNull: false, type: Sequelize.STRING },

  attachment: { allowNull: true, type: Sequelize.STRING },

  likes: { allowNull: false, type: Sequelize.INTEGER },

  dislikes: { allowNull: false, type: Sequelize.INTEGER },

  usersLiked: { allowNull: false, type: Sequelize.STRING},

  usersDisliked: { allowNull: false, type: Sequelize.STRING},

  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

 module.exports = Post