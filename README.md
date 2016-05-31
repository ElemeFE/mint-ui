# mint-ui
> Mobile UI elements for vue.js

- [Homepage](http://mint-ui.github.io)
- [Documentation](http://mint-ui.github.io/docs)

## Installation
```shell
npm i mint-ui -S
```

## Usage

import all components.

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


Equal to

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

## Development

```shell
make dev
```

## Production
```shell
make dist
```

## Deploy Example
```shell
make deploy
```

## License
MIT
