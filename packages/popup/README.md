# Overview
mint-popup is a popup component for vue.js

# Installation
First, install `mint-popup` from npm:
```bash
$ npm install mint-popup
```

Import it:
```Javascript
require ('mint-popup/lib/index.css');

// ES6 mudule
import Popup from 'mint-popup';

// CommonJS
const Popup = require('mint-popup').default;
```

Register component:
```Javascript
Vue.component('popup', Popup);
```

Then use it:
```html
<popup :visible.sync="popupVisible" position="bottom"></popup>
```

# Usage
`position` defines the location of the popup. If it's `bottom`, when you switch on the popup, it'll slide into the screen from the bottom and become fixed at the bottom.

If the `position` attribute is omitted, the popup will be located at the center of the viewport (and of course you can relocate it using CSS). In this case, you may want to set its `popup-transition` attribute to `popup-fade` so that it'll have a fading effect when switched on/off.

Sync `visible` with one of your vue instance variables. Toggle it to switch on/off the popup.

# API
| Option            | Description                                                 | Value                         | Default       |
|-------------------|-------------------------------------------------------------|-------------------------------|---------------|
| visible           | visibility of the popup                                     | Boolean                       | 'false'       |
| position          | location of the popup                                       | 'top' 'right' 'bottom' 'left' |               |
| pop-transition    | CSS transition of the popup                                 | 'popup-fade' 'popup-slide'    | 'popup-slide' |
| modal             | determines if a modal pops with the popup                   | Boolean                       | true          |
| closeOnClickModal | determines if the popup turns off when the modal is clicked | Boolean                       | true          |

# License
MIT
