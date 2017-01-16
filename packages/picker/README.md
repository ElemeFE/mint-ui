# Overview
vue-picker is a multi-slot picker based on vue.js.

# Install

```Bash
npm install vue-picker --save
```

```JavaScript
require ('mint-picker/lib/index.css');

// ES6 mudule
import Picker from 'mint-picker';

// CommonJS
const Picker = require('mint-picker').default;
```
Register component:
```Javascript
Vue.component('picker', Picker);
```

# Usage

```HTML
<picker :slots="slots" @change="onValuesChange" rotate-effect :visible-item-count="3">
   <!-- Toolbar items -->
  <button>confirm</button>
  <button>cancel</button>
</picker>
```

```JavaScript
export default {
  methods: {
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    }
  },

  data() {
    return {
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    };
  }
};
```

# Options

Picker Options:

| Option | Description |
| ----- | ----- |
| slots | Array(default: []) the slot config of picker. |
| showToolbar | Boolean(default: false) show a toolbar on top of picker when showToolbar is true. |
| visibleItemCount | Number(default: 5) visible item count of each slot. |
| rotateEffect | Boolean(default: false) use rotate effect on picker item when rotateEffect is true. |
| itemHeight | Number(default: 36) height of each slot. |

Picker Methods:

- getSlotValue(index): get the value of specific slot.
- setSlotValue(index, value): set the value of specific slot.
- getSlotValues(index): get the values of specific slot.
- setSlotValues(index, values): set the values of specific slot.
- getValues(): values of all slots except divider slots.
- setValues(values): set values(Array) of all slots except divider slots.

Picker Slot Options:

| Option | Description |
| ----- | ----- |
| divider | Boolean(default: false) - just a divider slot when divider is true. |
| content | String - text content in divider slot. |
| values | values of this slot. |
| textAlign |  text align of this slot's item. |
| flex | the style.flex value of this slot. |
| className | className of this slot. |

# License
MIT