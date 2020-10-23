module.exports = {
  src_folders: ["./test"],
  output_folder: "./test/reports",

  webdriver: {
    start_process: true,
    server_path: require("chromedriver").path,
    port: 9515,
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: [
            "--headless"
          ]
        },
      },
    },
  },
};