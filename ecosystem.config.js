// For development purposes
module.exports = {
  apps: [
    {
      name: "package-gh-pages",
      script: "bin/www",
      watch: true,
      ignore_watch: ["resources/", ".git/"],
      log_date_format: "YYYY-MM-DD HH:mm Z"
    }
  ]
}
