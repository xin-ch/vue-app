/*
 * @Author: xin_chen
 * @Date: 2022-08-12 16:06:37
 * @LastEditTime: 2022-08-12 16:47:30
 * @LastEditors: xin_chen
 * @Description:
 * @FilePath: \project\app\vue.config.js
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    setupMiddlewares: require('./mock/index')
    //onBeforeSetupMiddleware: require('./mock/index')
    },
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"],
      },
    },
  },

  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true,
    },
  },
});
