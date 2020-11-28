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
          // FIXME: non-headless won't work with current footer display hack (see index.html inline js-script), fix when implementing responsiveness
          args: ["--headless", "window-size=375,812"],
        },
      },
    },
  },
};
