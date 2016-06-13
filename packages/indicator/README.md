# Overview
vue-indicator is a mobile loading indicator plugin for vue.js.

# Installation
First, install `vue-indicator` from npm:
```bash
$ npm install vue-indicator
```

Then use it:
```Javascript
// ES6 mudule
import Indicator from 'vue-indicator';

// CommonJS
const Indicator = require('vue-indicator').default;
```

# Usage
Open an indicator:
```Javascript
Indicator.open();
```

Open an indicator with a string:
```Javascript
Indicator.open('Loading...');
```

Open an indicator with an object:
```Javascript
Indicator.open({ text:'Loading...', spinnerType: 'fading-circle' });
```

Then close it:
```Javascript
Indicator.close();
```

# API
| Option      | Description    | Value                                                       | Default |
|-------------|----------------|-------------------------------------------------------------|---------|
| text        | indicator text | String                                                      |         |
| spinnerType | spinner type   | 'snake', 'fading-circle', 'double-bounce', 'triple-bounce'  | 'snake' |

# License
MIT
