/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-02 09:34:41
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-20 14:07:23
 */
module.exports = (api, options, rootOptions) => {
  // prettier-ignore
  api.extendPackage({
    devDependencies: {
      "eslint": "^6.8.0",
      "prettier": "^1.19.1",
      "babel-eslint": "^10.0.3",
      "vue-eslint-parser": "^7.0.0",
      "eslint-config-airbnb-base": "^14.0.0",
      "eslint-config-prettier": "^6.9.0",
      "eslint-plugin-prettier": "^3.1.2",
      "eslint-plugin-vue": "^6.1.2",
      "eslint-plugin-import": "^2.19.1",
      "@typescript-eslint/eslint-plugin": "^2.14.0",
      "@typescript-eslint/parser": "^2.14.0",
      "commitizen": "^4.0.3",
      "commitlint-config-cz": "^0.13.1",
      "cz-conventional-changelog": "^3.1.0",
      "cz-customizable": "^6.2.0",
      "husky": "^4.2.3"
    }
  });

  // prettier-ignore
  api.extendPackage({
    // prettier-ignore
    "scripts": {
      "eslint:check": "eslint '**'",
      "eslint:fix": "eslint --fix '**'",
      "commit": "git-cz",
      "gd": "git add .",
      "prettier":
        "prettier --write --no-editorconfig --config-precedence file-override '**'"
    },
    "config": {
      "commitizen": {
        "path": "node_modules/cz-customizable"
      }
    },
    "husky": {
      "hooks": {
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
      }
    }
  });
  api.render("./template");
};
