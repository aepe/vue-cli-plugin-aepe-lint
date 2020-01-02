/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-02 09:34:55
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-01-02 10:18:08
 */
module.exports = api => {
  api.chainWebpack(webpackConfig => {
    webpackConfig.devServer.disableHostCheck(true);
  });
};
