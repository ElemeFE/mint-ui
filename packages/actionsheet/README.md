# Overview
mint-actionsheet is an action sheet component for vue.js

# Installation
First, install `mint-actionsheet` from npm:
```bash
$ npm install mint-actionsheet
```

Import it:
```Javascript
require ('mint-actionsheet/lib/index.css');

// ES6 mudule
import Actionsheet from 'mint-actionsheet';

// CommonJS
const Actionsheet = require('mint-actionsheet').default;
```

Register component:
```Javascript
Vue.component('actionsheet', Actionsheet);
```

Then use it:
```html
<actionsheet :actions="actions" :visible.sync="sheetVisible"></actionsheet>
```

# Usage
`actions` is an array of objects. Each object has two keys: `name` and `method`. `name` is the text showing on the sheet, and `method` (optional) is the callback when clicked.

Sync `visible` with one of your vue instance variables. Toggle it to switch on/off the action sheet.

# API
| Option             | Description                                                       | Value   | Default  |
|--------------------|-------------------------------------------------------------------|---------|----------|
| actions            | array of actions                                                  | Array   |          |
| visible            | visibility of the action sheet                                    | Boolean | 'false'  |
| cancelText         | text of the cancel button                                         | String  | '取消'   |
| closeOnClickModal  | determines if the action sheet turn off when the modal is clicked | Boolean | 'true'   |

# License
MIT