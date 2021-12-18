System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "@pixi/filter-advanced-bloom": "npm:@pixi/filter-advanced-bloom@3.0.3",
    "@pixi/filter-ascii": "npm:@pixi/filter-ascii@3.0.3",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "dat.gui": "npm:dat.gui@0.7.6",
    "lodash": "npm:lodash@4.17.11",
    "pixi-filters": "npm:pixi-filters@3.0.3",
    "pixi.js": "npm:pixi.js@5.0.4",
    "stats.js": "npm:stats.js@0.17.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.5.0"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.2.1"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:@pixi/accessibility@5.0.4": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/display": "npm:@pixi/display@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4"
    },
    "npm:@pixi/app@5.0.4": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/display": "npm:@pixi/display@5.0.4"
    },
    "npm:@pixi/constants@5.0.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@pixi/core@5.0.4": {
      "@pixi/constants": "npm:@pixi/constants@5.0.4",
      "@pixi/display": "npm:@pixi/display@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4",
      "@pixi/runner": "npm:@pixi/runner@5.0.4",
      "@pixi/settings": "npm:@pixi/settings@5.0.4",
      "@pixi/ticker": "npm:@pixi/ticker@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@pixi/display@5.0.4": {
      "@pixi/math": "npm:@pixi/math@5.0.4",
      "@pixi/settings": "npm:@pixi/settings@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@pixi/extract@5.0.4": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4"
    },
    "npm:@pixi/filter-adjustment@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4"
    },
    "npm:@pixi/filter-advanced-bloom@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/filter-kawase-blur": "npm:@pixi/filter-kawase-blur@3.0.3",
      "@pixi/settings": "npm:@pixi/settings@5.0.4"
    },
    "npm:@pixi/filter-alpha@5.0.4": {
      "@pixi/core": "npm:@pixi/core@5.0.4"
    },
    "npm:@pixi/filter-ascii@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4"
    },
    "npm:@pixi/filter-bevel@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4"
    },
    "npm:@pixi/filter-bloom@3.0.3": {
      "@pixi/constants": "npm:@pixi/constants@5.0.4",
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/filter-alpha": "npm:@pixi/filter-alpha@5.0.4",
      "@pixi/filter-blur": "npm:@pixi/filter-blur@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4",
      "@pixi/settings": "npm:@pixi/settings@5.0.4"
    },
    "npm:@pixi/filter-blur@5.0.4": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/settings": "npm:@pixi/settings@5.0.4"
    },
    "npm:@pixi/filter-bulge-pinch@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4"
    },
    "npm:@pixi/filter-color-map@3.0.3": {
      "@pixi/constants": "npm:@pixi/constants@5.0.4",
      "@pixi/core": "npm:@pixi/core@5.0.4"
    },
    "npm:@pixi/filter-color-matrix@5.0.4": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@pixi/filter-color-replace@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4"
    },
    "npm:@pixi/filter-convolution@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4"
    },
    "npm:@pixi/filter-cross-hatch@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4"
    },
    "npm:@pixi/filter-crt@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4"
    },
    "npm:@pixi/filter-displacement@5.0.4": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4"
    },
    "npm:@pixi/filter-dot@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4"
    },
    "npm:@pixi/filter-drop-shadow@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/filter-kawase-blur": "npm:@pixi/filter-kawase-blur@3.0.3",
      "@pixi/math": "npm:@pixi/math@5.0.4",
      "@pixi/settings": "npm:@pixi/settings@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4"
    },
    "npm:@pixi/filter-emboss@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4"
    },
    "npm:@pixi/filter-fxaa@5.0.4": {
      "@pixi/core": "npm:@pixi/core@5.0.4"
    },
    "npm:@pixi/filter-glitch@3.0.3": {
      "@pixi/constants": "npm:@pixi/constants@5.0.4",
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4"
    },
    "npm:@pixi/filter-glow@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4"
    },
    "npm:@pixi/filter-godray@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4"
    },
    "npm:@pixi/filter-kawase-blur@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4"
    },
    "npm:@pixi/filter-motion-blur@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4"
    },
    "npm:@pixi/filter-multi-color-replace@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4"
    },
    "npm:@pixi/filter-noise@5.0.4": {
      "@pixi/core": "npm:@pixi/core@5.0.4"
    },
    "npm:@pixi/filter-old-film@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4"
    },
    "npm:@pixi/filter-outline@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4"
    },
    "npm:@pixi/filter-pixelate@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4"
    },
    "npm:@pixi/filter-radial-blur@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4"
    },
    "npm:@pixi/filter-reflection@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4"
    },
    "npm:@pixi/filter-rgb-split@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4"
    },
    "npm:@pixi/filter-shockwave@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4"
    },
    "npm:@pixi/filter-simple-lightmap@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4"
    },
    "npm:@pixi/filter-tilt-shift@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4"
    },
    "npm:@pixi/filter-twist@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4"
    },
    "npm:@pixi/filter-zoom-blur@3.0.3": {
      "@pixi/core": "npm:@pixi/core@5.0.4"
    },
    "npm:@pixi/graphics@5.0.4": {
      "@pixi/constants": "npm:@pixi/constants@5.0.4",
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/display": "npm:@pixi/display@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4",
      "@pixi/sprite": "npm:@pixi/sprite@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@pixi/interaction@5.0.4": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/display": "npm:@pixi/display@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4",
      "@pixi/ticker": "npm:@pixi/ticker@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@pixi/loaders@5.0.4": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "resource-loader": "npm:resource-loader@2.2.4"
    },
    "npm:@pixi/mesh-extras@5.0.4": {
      "@pixi/constants": "npm:@pixi/constants@5.0.4",
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4",
      "@pixi/mesh": "npm:@pixi/mesh@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4"
    },
    "npm:@pixi/mesh@5.0.4": {
      "@pixi/constants": "npm:@pixi/constants@5.0.4",
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/display": "npm:@pixi/display@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4",
      "@pixi/settings": "npm:@pixi/settings@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@pixi/mixin-cache-as-bitmap@5.0.4": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/display": "npm:@pixi/display@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4",
      "@pixi/settings": "npm:@pixi/settings@5.0.4",
      "@pixi/sprite": "npm:@pixi/sprite@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4"
    },
    "npm:@pixi/mixin-get-child-by-name@5.0.4": {
      "@pixi/display": "npm:@pixi/display@5.0.4"
    },
    "npm:@pixi/mixin-get-global-position@5.0.4": {
      "@pixi/display": "npm:@pixi/display@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4"
    },
    "npm:@pixi/particles@5.0.4": {
      "@pixi/constants": "npm:@pixi/constants@5.0.4",
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/display": "npm:@pixi/display@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4"
    },
    "npm:@pixi/polyfill@5.0.4": {
      "es6-promise-polyfill": "npm:es6-promise-polyfill@1.2.0",
      "object-assign": "npm:object-assign@4.1.1"
    },
    "npm:@pixi/prepare@5.0.4": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/display": "npm:@pixi/display@5.0.4",
      "@pixi/graphics": "npm:@pixi/graphics@5.0.4",
      "@pixi/settings": "npm:@pixi/settings@5.0.4",
      "@pixi/text": "npm:@pixi/text@5.0.4",
      "@pixi/ticker": "npm:@pixi/ticker@5.0.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@pixi/settings@5.0.4": {
      "ismobilejs": "npm:ismobilejs@0.5.2"
    },
    "npm:@pixi/sprite-animated@5.0.4": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/sprite": "npm:@pixi/sprite@5.0.4",
      "@pixi/ticker": "npm:@pixi/ticker@5.0.4"
    },
    "npm:@pixi/sprite-tiling@5.0.4": {
      "@pixi/constants": "npm:@pixi/constants@5.0.4",
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/display": "npm:@pixi/display@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4",
      "@pixi/sprite": "npm:@pixi/sprite@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@pixi/sprite@5.0.4": {
      "@pixi/constants": "npm:@pixi/constants@5.0.4",
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/display": "npm:@pixi/display@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4",
      "@pixi/settings": "npm:@pixi/settings@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@pixi/spritesheet@5.0.4": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/loaders": "npm:@pixi/loaders@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@pixi/text-bitmap@5.0.4": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/display": "npm:@pixi/display@5.0.4",
      "@pixi/loaders": "npm:@pixi/loaders@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4",
      "@pixi/settings": "npm:@pixi/settings@5.0.4",
      "@pixi/sprite": "npm:@pixi/sprite@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4"
    },
    "npm:@pixi/text@5.0.4": {
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4",
      "@pixi/settings": "npm:@pixi/settings@5.0.4",
      "@pixi/sprite": "npm:@pixi/sprite@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4"
    },
    "npm:@pixi/ticker@5.0.4": {
      "@pixi/settings": "npm:@pixi/settings@5.0.4"
    },
    "npm:@pixi/utils@5.0.4": {
      "@pixi/constants": "npm:@pixi/constants@5.0.4",
      "@pixi/settings": "npm:@pixi/settings@5.0.4",
      "earcut": "npm:earcut@2.1.5",
      "eventemitter3": "npm:eventemitter3@3.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "npm:url@0.11.0"
    },
    "npm:assert@1.5.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.2.1": {
      "base64-js": "npm:base64-js@1.3.0",
      "ieee754": "npm:ieee754@1.1.13"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:earcut@2.1.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pixi-filters@3.0.3": {
      "@pixi/filter-adjustment": "npm:@pixi/filter-adjustment@3.0.3",
      "@pixi/filter-advanced-bloom": "npm:@pixi/filter-advanced-bloom@3.0.3",
      "@pixi/filter-ascii": "npm:@pixi/filter-ascii@3.0.3",
      "@pixi/filter-bevel": "npm:@pixi/filter-bevel@3.0.3",
      "@pixi/filter-bloom": "npm:@pixi/filter-bloom@3.0.3",
      "@pixi/filter-bulge-pinch": "npm:@pixi/filter-bulge-pinch@3.0.3",
      "@pixi/filter-color-map": "npm:@pixi/filter-color-map@3.0.3",
      "@pixi/filter-color-replace": "npm:@pixi/filter-color-replace@3.0.3",
      "@pixi/filter-convolution": "npm:@pixi/filter-convolution@3.0.3",
      "@pixi/filter-cross-hatch": "npm:@pixi/filter-cross-hatch@3.0.3",
      "@pixi/filter-crt": "npm:@pixi/filter-crt@3.0.3",
      "@pixi/filter-dot": "npm:@pixi/filter-dot@3.0.3",
      "@pixi/filter-drop-shadow": "npm:@pixi/filter-drop-shadow@3.0.3",
      "@pixi/filter-emboss": "npm:@pixi/filter-emboss@3.0.3",
      "@pixi/filter-glitch": "npm:@pixi/filter-glitch@3.0.3",
      "@pixi/filter-glow": "npm:@pixi/filter-glow@3.0.3",
      "@pixi/filter-godray": "npm:@pixi/filter-godray@3.0.3",
      "@pixi/filter-kawase-blur": "npm:@pixi/filter-kawase-blur@3.0.3",
      "@pixi/filter-motion-blur": "npm:@pixi/filter-motion-blur@3.0.3",
      "@pixi/filter-multi-color-replace": "npm:@pixi/filter-multi-color-replace@3.0.3",
      "@pixi/filter-old-film": "npm:@pixi/filter-old-film@3.0.3",
      "@pixi/filter-outline": "npm:@pixi/filter-outline@3.0.3",
      "@pixi/filter-pixelate": "npm:@pixi/filter-pixelate@3.0.3",
      "@pixi/filter-radial-blur": "npm:@pixi/filter-radial-blur@3.0.3",
      "@pixi/filter-reflection": "npm:@pixi/filter-reflection@3.0.3",
      "@pixi/filter-rgb-split": "npm:@pixi/filter-rgb-split@3.0.3",
      "@pixi/filter-shockwave": "npm:@pixi/filter-shockwave@3.0.3",
      "@pixi/filter-simple-lightmap": "npm:@pixi/filter-simple-lightmap@3.0.3",
      "@pixi/filter-tilt-shift": "npm:@pixi/filter-tilt-shift@3.0.3",
      "@pixi/filter-twist": "npm:@pixi/filter-twist@3.0.3",
      "@pixi/filter-zoom-blur": "npm:@pixi/filter-zoom-blur@3.0.3"
    },
    "npm:pixi.js@5.0.4": {
      "@pixi/accessibility": "npm:@pixi/accessibility@5.0.4",
      "@pixi/app": "npm:@pixi/app@5.0.4",
      "@pixi/constants": "npm:@pixi/constants@5.0.4",
      "@pixi/core": "npm:@pixi/core@5.0.4",
      "@pixi/display": "npm:@pixi/display@5.0.4",
      "@pixi/extract": "npm:@pixi/extract@5.0.4",
      "@pixi/filter-alpha": "npm:@pixi/filter-alpha@5.0.4",
      "@pixi/filter-blur": "npm:@pixi/filter-blur@5.0.4",
      "@pixi/filter-color-matrix": "npm:@pixi/filter-color-matrix@5.0.4",
      "@pixi/filter-displacement": "npm:@pixi/filter-displacement@5.0.4",
      "@pixi/filter-fxaa": "npm:@pixi/filter-fxaa@5.0.4",
      "@pixi/filter-noise": "npm:@pixi/filter-noise@5.0.4",
      "@pixi/graphics": "npm:@pixi/graphics@5.0.4",
      "@pixi/interaction": "npm:@pixi/interaction@5.0.4",
      "@pixi/loaders": "npm:@pixi/loaders@5.0.4",
      "@pixi/math": "npm:@pixi/math@5.0.4",
      "@pixi/mesh": "npm:@pixi/mesh@5.0.4",
      "@pixi/mesh-extras": "npm:@pixi/mesh-extras@5.0.4",
      "@pixi/mixin-cache-as-bitmap": "npm:@pixi/mixin-cache-as-bitmap@5.0.4",
      "@pixi/mixin-get-child-by-name": "npm:@pixi/mixin-get-child-by-name@5.0.4",
      "@pixi/mixin-get-global-position": "npm:@pixi/mixin-get-global-position@5.0.4",
      "@pixi/particles": "npm:@pixi/particles@5.0.4",
      "@pixi/polyfill": "npm:@pixi/polyfill@5.0.4",
      "@pixi/prepare": "npm:@pixi/prepare@5.0.4",
      "@pixi/runner": "npm:@pixi/runner@5.0.4",
      "@pixi/settings": "npm:@pixi/settings@5.0.4",
      "@pixi/sprite": "npm:@pixi/sprite@5.0.4",
      "@pixi/sprite-animated": "npm:@pixi/sprite-animated@5.0.4",
      "@pixi/sprite-tiling": "npm:@pixi/sprite-tiling@5.0.4",
      "@pixi/spritesheet": "npm:@pixi/spritesheet@5.0.4",
      "@pixi/text": "npm:@pixi/text@5.0.4",
      "@pixi/text-bitmap": "npm:@pixi/text-bitmap@5.0.4",
      "@pixi/ticker": "npm:@pixi/ticker@5.0.4",
      "@pixi/utils": "npm:@pixi/utils@5.0.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:resource-loader@2.2.4": {
      "mini-signals": "npm:mini-signals@1.2.0",
      "parse-uri": "npm:parse-uri@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:url@0.11.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
