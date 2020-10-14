const Mongo = require("mongodb")

const __MODULE__ = "sinc-repository"

const getLastRegister = (db) =>
  db.collection(__MODULE__).findOne({ $query: {}, $orderby: { $natural: -1 } })

module.exports = {
  getLastRegister,
}
