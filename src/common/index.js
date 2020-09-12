const path = require('path')
const resolve = (...srcs) => path.resolve(__dirname, ...srcs)

module.exports = {
  path,
  resolve
}
