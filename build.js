"use strict";

require("core-js/modules/es.array.flat-map.js");
require("core-js/modules/es.array.sort.js");
require("core-js/modules/es.array.unscopables.flat-map.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/esnext.string.replace-all.js");
console.log([1, 2, 3].flatMap(function () {
  return [];
}));
console.log("123".replaceAll("1", "2"));
console.log([1, 2, 3].at(0));
console.log([3, 2, 1].toSorted(function (a, b) {
  return a - b;
}));
