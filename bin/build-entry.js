var Components = require('../components.json')
var fs = require('fs')
var render = require('json-templater/string')
var uppercamelcase = require('uppercamelcase')
var path = require('path')

var OUTPUT_PATH = path.join(__dirname, '../src/index.js')
var IMPORT_TEMPLATE = `import {{name}} from '../packages/{{package}}/index.js';`
var ISNTALL_COMPONENT_TEMPLATE = `  Vue.component({{name}}.name, {{name}});`
var MAIN_TEMPLATE = `{{include}}
import '../src/assets/font/iconfont.css';

const install = function(Vue) {
{{install}}
  Vue.use(InfiniteScroll);
  Vue.use(Lazyload, {
    loading: require('./assets/loading-spin.svg'),
    try: 3
  });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  install,
{{list}}
};
`

delete Components.font

var ComponentNames = Object.keys(Components)

var includeComponentTemplate = []
var installTemplate = []
var listTemplate = []

ComponentNames.forEach(name => {
  var componentName = uppercamelcase(name)

  includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
    name: componentName,
    package: name
  }))


  if (['InfiniteScroll', 'Lazyload'].indexOf(componentName) === -1) {
    installTemplate.push(render(ISNTALL_COMPONENT_TEMPLATE, {
      name: componentName,
      component: name
    }))
  }

  listTemplate.push(`  ${componentName}`)
})

var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join('\n'),
  install: installTemplate.join('\n'),
  list: listTemplate.join(',\n')
})

fs.writeFileSync(OUTPUT_PATH, template)
console.log('[build entry] DONE:', OUTPUT_PATH)

