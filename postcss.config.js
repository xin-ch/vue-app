/*
 * @Author: xin_chen
 * @Date: 2022-08-12 16:08:49
 * @LastEditTime: 2022-08-12 16:13:43
 * @LastEditors: xin_chen
 * @Description:
 * @FilePath: \project\app\postcss.config.js
 */
const autoprefixer = require('autoprefixer')
const px2rem = require('postcss-pxtorem')

module.exports = {
  plugins: [autoprefixer(), px2rem({ rootValue: 75, unitPrecision: 5, propList: ['*'] })],
}
