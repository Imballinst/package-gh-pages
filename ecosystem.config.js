// For development purposes
module.exports = {
  apps: [
    {
      name: "package-gh-pages",
      script: "bin/www/index.js",
      watch: true,
      ignore_watch : ["resources/assets/", "resources/tests/", ".git/"]
    }
  ]
}
