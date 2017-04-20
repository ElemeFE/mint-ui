# Overview
mint-loadmore is a two-direction mobile pull-to-refresh component for vue.js.

# Installation
```bash
$ npm install mint-loadmore
```

# Usage
Import `mint-loadmore` to your project:
```Javascript
require('mint-loadmore/lib/index.css');

// ES6 mudule
import Loadmore from 'mint-loadmore';

// CommonJS
const Loadmore = require('mint-loadmore').default;
```

Register component:
```Javascript
Vue.component('loadmore', Loadmore);
```

Then use it:
```html
<loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
  ...
</loadmore>
```

# Example
Visit [this page](http://leopoldthecoder.github.io/Demos/vue-loadmore/index.html) using your mobile device.
```html
<loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
  <ul>
    <li v-for="item in list">{{ item }}</li>
  </ul>
</loadmore>
<loadmore :top-method="loadTop2" :top-status.sync="topStatus">
  <ul>
    <li v-for="item in list2">{{ item }}</li>
  </ul>
  <div slot="top" class="mint-loadmore-top">
    <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
    <span v-show="topStatus === 'loading'">Loading...</span>
  </div>
</loadmore>
```
For upward direction, pull the component `topDistance` pixels away from the top and then release it, the function you appointed as `top-method` will run:
```Javascript
loadTop(id) {
  ...// load more data
  this.$broadcast('onTopLoaded', id);
}
```
At the end of your `top-method`, don't forget to broadcast the `onTopLoaded` event so that `mint-loadmore` removes `topLoadingText`. Note that a parameter called `id` is passed to `loadTop` and `onTopLoaded`. This is because after the top data is loaded, some reposition work is performed inside a `mint-loadmore` instance, and `id` simply tells the component which instance should be repositioned. You don't need to do anything more than passing `id` to `onTopLoaded` just as shown above.

For downward direction, things are similar. To invoke `bottom-method`, just pull the component `bottomDistance` pixels away from the bottom and then release it.
```Javascript
loadBottom(id) {
  ...// load more data
  this.allLoaded = true;// if all data are loaded
  this.$broadcast('onBottomLoaded', id);
}
```
Remember to set `bottom-all-loaded` to `true` after all data are loaded. And of course broadcast `onBottomLoaded` with `id`.

You can customize the top and bottom DOM using an HTML template. For example, to customize the top DOM, you'll need to add a variable that syncs with `top-status` on `loadmore` tag, and then write your template with a `slot` attribute set to `top` and `class` set to `mint-loadmore-top`. `top-status` has three possible values that indicates which status the component is at:
*  `pull` if the component is being pulled yet not ready to drop (top distance is within the distance threshold defined by `topDistance`)
*  `drop` if the component is ready to drop
*  `loading` if `topMethod` is running

And of course, if a top HTMl template is given, `topPullText`, `topDropText` and `topLoadingText` are all unnecessary.

Don't need to load data from upward direction? Simply omit the `topMethod` attribute. Same goes to downward.

Upon loaded, `loadmore` will automatically check if it is tall enough to fill its container. If not, `bottom-method` will run until its container is filled. Turn off `auto-fill` if you'd rather handle this manually.

# API
| Option            | Description                                                      | Value    | Default     |
|-------------------|------------------------------------------------------------------|----------|-------------|
| autoFill          | if `true`, `loadmore` will check and fill its container          | Boolean  | true        |
| topPullText       | top text when the component is being pulled down                 | String   | '下拉刷新'  |
| topDropText       | top text when the component is ready to drop                     | String   | '释放更新'  |
| topLoadingText    | top text while `topMethod` is running                            | String   | '加载中...' |
| topDistance       | distance threshold that triggers `topMethod`                     | Number   | 70          |
| topMethod         | upward load-more function                                        | Function |             |
| bottomPullText    | bottom text when the component is being pulled up                | String   | '上拉刷新'  |
| bottomDropText    | bottom text when the component is ready to drop                  | String   | '释放更新'  |
| bottomLoadingText | bottom text while `bottomMethod` is running                      | String   | '加载中...' |
| bottomDistance    | distance threshold that triggers `bottomMethod`                  | Number   | 70          |
| bottomMethod      | downward load-more function                                      | Function |             |
| bottomAllLoaded   | if `true`, `bottomMethod` can no longer be triggered             | Boolean  | false       |

# License
MIT
