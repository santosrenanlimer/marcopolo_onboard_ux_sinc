"use strict"

global.__basepath = __dirname + "/"
global.use = (path) => require(__basepath + path)

const Koa = require("koa")
const Bodyparser = require("koa-bodyparser")
const Logger = require("koa-logger")
const Cors = require("@koa/cors")
const Mongo = require("koa-mongo")
const serve = require("koa-static")
const https = require("https")
const MongoClient = require("mongodb").MongoClient

const config = use("config")
const routes = use("routes")
const cron = require("node-cron")

const SincRepositoryController = use("controllers/sinc-repository-controller")

const app = new Koa()

app.use(
  Mongo({
    url: config.mongodb_uri,
    max: 100,
    min: 1,
  })
)

app.use(Logger())
app.use(Cors({ origin: "*" }))
app.use(Bodyparser({ jsonLimit: "15mb" }))

cron.schedule("* 10 * * * *", async () => {
  const dbClient = await MongoClient.connect(config.mongodb_uri)
  const db = dbClient.db()
  await SincRepositoryController.checkUpdateScript(db)
  dbClient.close()
})

routes.forEach((route) => app.use(route.routes()))

app.listen(config.port, async () => {
  console.log(`🚀  api running on ${config.port} port ${config.port}`)
})
