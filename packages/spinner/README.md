# mint-spinner
> spinner.

## Install
```shell
npm i mint-spinner -S
```


## Usage
import all spinner
```javascript
import Vue from 'vue';
import Spinner from 'mint-spinner';

Vue.use(Spinner);
```

```html
<mt-spinner></mt-spinner>
```

## Spinner
- snake
- double-bounce
- triple-bounce
- fading-circle

## API

### color
- type: String

### size
- type: Number

### type
- type: String|Number

```html
<mt-spinner :type="0"></mt-spinner>
<mt-spinner type="snake"></mt-spinner>

<mt-spinner :type="1"></mt-spinner>
<mt-spinner type="double-bounce"></mt-spinner>

<mt-spinner :type="2"></mt-spinner>
<mt-spinner type="triple-bounce"></mt-spinner>

<mt-spinner :type="3"></mt-spinner>
<mt-spinner type="fading-circle"></mt-spinner>
```

## License
MIT
