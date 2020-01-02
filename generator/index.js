/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-02 09:34:41
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-01-02 15:46:03
 */
module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    devDependencies: {
      // prettier-ignore
      "prettier": "^1.19.1",
      "eslint-config-airbnb-base": "^14.0.0",
      "eslint-config-prettier": "^6.9.0",
      "eslint-plugin-prettier": "^3.1.2",
      "eslint-plugin-vue": "^6.1.2",
      "eslint-plugin-import": "^2.19.1",
      "@typescript-eslint/eslint-plugin": "^2.14.0",
      "@typescript-eslint/parser": "^2.14.0"
    }
  });
  api.extendPackage({
    scripts: {
      "eslint:check": "eslint '**'",
      "eslint:fix": "eslint --fix '**'",
      // prettier-ignore
      "prettier":
        "prettier --write --no-editorconfig --config-precedence file-override '**'"
    }
  });
  api.render("./template");
};
