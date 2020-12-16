const db = require("../../data/connection");

function find() {
  return db("users");
}

function findBy(filter) {
  return db("users").where(filter);
}

function add(user) {
  return db("users").insert(user, "id");
}

function findById(id) {
  return db("users").where(id);
}

module.exports = {
  add,
  findBy,
  find,
  findById,
};
