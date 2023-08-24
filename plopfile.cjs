const componentGenerator = require('./plop-templates/component/prompt.cjs')

module.exports = function(plop) {
  plop.setGenerator('component', componentGenerator)
}