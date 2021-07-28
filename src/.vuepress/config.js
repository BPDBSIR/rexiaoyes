const path = require('path')
const nav = require("./config/nav")
const sidebar = require("./config/sidebar")

module.exports = {
  title: "我叫毕同学",
  description: "BPDBSIR",
  theme: "reco",
  base: "/",
  dest: "./public",
  head: [
    ["link",{ rel: "icon",href: "/logo.png"}]
  ],
  themeConfig: {
    logo: "/logo.png",
    nav,
    sidebar
  }
}