/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-02 09:34:41
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-01-02 11:08:22
 */
module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      // prettier-ignore
      "prettier": "^1.19.1",
      "eslint-config-prettier": "^6.8.0",
      "eslint-plugin-prettier": "^3.1.2",
      "eslint-plugin-vue": "6.1.2"
    }
  });
  api.render("./template");
};
