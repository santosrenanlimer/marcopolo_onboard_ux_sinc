const env = process.env.NODE_ENV || "dev"
const fs = require("fs")
const path = require("path")

const configs = {
  dev: {
    port: 3003,
    localeInsert: "nuvem",
    jwtsecret:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    mongodb_uri: "mongodb://localhost:27017/onboard",
  },
  staging: {
    port: 3004,
    localeInsert: "nuvem",
    jwtsecret:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    mongodb_uri: "mongodb://127.0.0.1:27017/onboard_homolog",
  },
  staging_local: {
    port: 3003,
    localeInsert: "vod",
    jwtsecret:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    apisoha_url: "https://onboard.marcopolonext.com.br/nespresso/api",
    mongodb_uri: "mongodb://localhost:27017/onboardv2_homolog_vod", //local database
  },
  staging_nuvem: {
    port: 3005,
    localeInsert: "nuvem",
    jwtsecret:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",

    mongodb_uri: "mongodb://localhost:27017/onboardv2_homolog_nuvem", //local database
  },
  production_local: {
    port: 3004,
    localeInsert: "vod",
    jwtsecret:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    mongodb_uri: "mongodb://localhost:27017/onboardv2", //local database
  },
  production_nuvem: {
    port: 3006,
    localeInsert: "nuvem",
    jwtsecret:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    mongodb_uri: "mongodb://127.0.0.1:27017/onboard", //local database
  },
}

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0

Object.entries(configs).forEach(([env, arr]) => (arr.env = env))

const config = configs[env]
if (!config) throw new Error(`NODE_ENV \`${env}\` NOT CONFIGURED!`)

const badProperty = Object.entries(config).find(
  ([key, value]) => value === undefined
)
if (badProperty)
  throw new Error(
    `NODE_ENV \`${env}\` KEY \`${badProperty[0]}\` is undefined! Please configure it!`
  )

module.exports = config
