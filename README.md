# mint-ui

[![npm](https://img.shields.io/npm/v/mint-ui.svg?maxAge=3600)](https://www.npmjs.com/package/mint-ui)
![JS gzip size](https://badge-size.herokuapp.com/elemefe/mint-ui/master/lib/index.js.svg?compression=gzip&label=gzip%20size:%20JS)
![CSS gzip size](https://badge-size.herokuapp.com/elemefe/mint-ui/master/lib/style.css.svg?compression=gzip&label=gzip%20size:%20CSS)

> Mobile UI elements for vue.js

- [Homepage](http://mint-ui.github.io)
- [Documentation](http://mint-ui.github.io/docs)

## Installation
```shell
npm i mint-ui -S
```

## Usage

Import all components.

```javascript
import Vue from 'vue'
import Mint from 'mint-ui';

Vue.use(Mint);
```

Or import specified component. (Use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component))

```javascript
import { Cell, Checklist } from 'mint-ui';

Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);
```


Equals to

```javascript
import Vue from 'vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Mint);

// import specified component

import MtRadio from 'mint-ui/lib/radio';
import 'mint-ui/lib/radio/style.css';

Vue.component(MtRadio.name, MtRadio);
```

## babel-plugin-component
- Auto import css file
- Modular import component

Installation
```shell
npm i babel-plugin-component -D
```

Usage

.babelrc
```json
{
  "plugins": ["other-plugin", ["component", [
    { "libraryName": "mint-ui", "style": true }
  ]]]
}
```

## CDN
RawGit

- https://cdn.rawgit.com/ElemeFE/mint-ui/master/lib/index.js
- https://cdn.rawgit.com/ElemeFE/mint-ui/master/lib/style.css

NPMCDN

- https://unpkg.com/mint-ui/lib/index.js
- https://unpkg.com/mint-ui/lib/style.css

## Development

```shell
npm i cooking -g
make dev
```

## License
MIT
