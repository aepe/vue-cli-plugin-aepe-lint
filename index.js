const path = require("path");

module.exports = (api, options) => {
  if (options.lintOnSave) {
    const { loadModule, resolveModule } = require("@vue/cli-shared-utils");

    const cwd = api.getCwd();
    // require("eslint/package.json");
    const eslintPkg =
      loadModule("eslint/package.json", cwd, true) ||
      loadModule("eslint/package.json", __dirname, true);

    // eslint-loader doesn't bust cache when eslint config changes
    // so we have to manually generate a cache identifier that takes the config
    // into account.
    const v = require("eslint-loader/package.json");
    const { cacheIdentifier } = api.genCacheConfig(
      "eslint-loader",
      {
        "eslint-loader": v.version,
        eslint: eslintPkg.version
      },
      [
        ".eslintrc.js",
        ".eslintrc.yaml",
        ".eslintrc.yml",
        ".eslintrc.json",
        ".eslintrc",
        "package.json"
      ]
    );

    api.chainWebpack(webpackConfig => {
      const { lintOnSave } = options;
      const allWarnings = lintOnSave === true || lintOnSave === "warning";
      const allErrors = lintOnSave === "error";

      webpackConfig.module
        .rule("eslint")
        .pre()
        .exclude.add(/node_modules/)
        .add(path.dirname(require.resolve("@vue/cli-service")))
        .end()
        .test(/\.(vue|(j|t)sx?)$/)
        .use("eslint-loader")
        .loader(require.resolve("eslint-loader"))
        .options({
          extensions: ["tsx", "ts", "js", ".vue"],
          cache: true,
          cacheIdentifier,
          emitWarning: allWarnings,
          // only emit errors in production mode.
          emitError: allErrors,
          eslintPath: path.dirname(
            resolveModule("eslint/package.json", cwd) ||
              resolveModule("eslint/package.json", __dirname)
          ),
          formatter: loadModule("eslint/lib/formatters/codeframe", cwd, true)
        });
    });
  }
};
