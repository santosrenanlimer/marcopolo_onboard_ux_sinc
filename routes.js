"use strict"
const Router = require("koa-router")
const bind = require("koa-clean") //this will make the controllers more clean
const Jwt = require("koa-jwt")
const SincRepositoryController = require("./controllers/sinc-repository-controller")

const Secret = use("config").jwtsecret

const sinc = new Router({ prefix: "/sinc" }).get(
  "/checkUpdateScript",
  bind(SincRepositoryController.checkUpdateScript)
)
//.post('/createOrderDebitOnline', bind(OrderController.createOrderDebitOnline))

module.exports = [sinc]
