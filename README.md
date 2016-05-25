# mint-ui
Mobile UI elements for vue.js

## Installation
```shell
npm i mint-ui -S
```

## Usage
```javascript
import Vue from 'vue'
import Mint from 'mint-ui';

Vue.use(Mint);
```

or import Specified components (Use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component))

```javascript
import { Cell, Checklist } from 'mint-ui';

Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);
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
