// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // 处理容器的长宽比缩放
    "postcss-aspect-ratio-mini": {},
    // 解决1px的问题，通过border-image或者background-image两种方式来处理
    "postcss-write-svg": {
      utf8: false
    },
    // 使用CSS未来的特性
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 640,     // (Number) The width of the viewport.
      viewportHeight: 1334,    // (Number) The height of the viewport.
      unitPrecision: 3,       // (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: 'vw',     // (String) Expected units.
      selectorBlackList: ['.ignore', '.hairlines'],  // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1,       // (Number) Set the minimum pixel value to replace.
      mediaQuery: false       // (Boolean) Allow px to be converted in media queries.
    },
    // 给CSS的属性添加content的属性，配合viewport-units-buggyfill库给vw、vh、vmin和vmax做适配的操作
    "postcss-viewport-units": {},
    // 压缩和清理CSS代码
    "cssnano": {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    }
  }
}

