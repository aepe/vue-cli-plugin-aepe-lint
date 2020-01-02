/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-02 13:34:12
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-01-02 13:34:27
 */
function clearRequireCache(id, map = new Map()) {
  const module = require.cache[id];
  if (module) {
    map.set(id, true);
    // Clear children modules
    module.children.forEach(child => {
      if (!map.get(child.id)) clearRequireCache(child.id, map);
    });
    delete require.cache[id];
  }
}
exports.loadModule = function(request, context, force = false) {
  const resolvedPath = exports.resolveModule(request, context);
  if (resolvedPath) {
    if (force) {
      clearRequireCache(resolvedPath);
    }
    return require(resolvedPath);
  }
};

exports.clearModule = function(request, context) {
  const resolvedPath = exports.resolveModule(request, context);
  if (resolvedPath) {
    clearRequireCache(resolvedPath);
  }
};
