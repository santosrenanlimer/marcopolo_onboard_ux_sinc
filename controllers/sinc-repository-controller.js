"use strict"

const { exec } = require("child_process")

const SincRepository = use("models/sinc-repository")

const checkUpdateScript = async ({ db }) => {
  let lastRepositor = SincRepository.lastRepositor(db)
  if (lastRepositor) {
    let yourscript = exec("sh ./etc/onboarding.sh", (error, stdout, stderr) => {
      console.log(stdout)
      console.log(stderr)
      if (error !== null) {
        console.log(`exec error: ${error}`)
      }
    })
  }
}

module.exports = {
  checkUpdateScript,
}
