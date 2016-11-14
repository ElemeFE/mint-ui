import Header from '../packages/header/index.js';
import Button from '../packages/button/index.js';
import Cell from '../packages/cell/index.js';
import CellSwipe from '../packages/cell-swipe/index.js';
import Field from '../packages/field/index.js';
import Badge from '../packages/badge/index.js';
import Switch from '../packages/switch/index.js';
import Spinner from '../packages/spinner/index.js';
import TabItem from '../packages/tab-item/index.js';
import TabContainerItem from '../packages/tab-container-item/index.js';
import TabContainer from '../packages/tab-container/index.js';
import Navbar from '../packages/navbar/index.js';
import Tabbar from '../packages/tabbar/index.js';
import Search from '../packages/search/index.js';
import Checklist from '../packages/checklist/index.js';
import Radio from '../packages/radio/index.js';
import Loadmore from '../packages/loadmore/index.js';
import Actionsheet from '../packages/actionsheet/index.js';
import Popup from '../packages/popup/index.js';
import Swipe from '../packages/swipe/index.js';
import SwipeItem from '../packages/swipe-item/index.js';
import Range from '../packages/range/index.js';
import Picker from '../packages/picker/index.js';
import Progress from '../packages/progress/index.js';
import Toast from '../packages/toast/index.js';
import Indicator from '../packages/indicator/index.js';
import MessageBox from '../packages/message-box/index.js';
import InfiniteScroll from '../packages/infinite-scroll/index.js';
import Lazyload from '../packages/lazyload/index.js';
import DatetimePicker from '../packages/datetime-picker/index.js';
import IndexList from '../packages/index-list/index.js';
import IndexSection from '../packages/index-section/index.js';
import PaletteButton from '../packages/palette-button/index.js';
import '../src/assets/font/iconfont.css';

const install = function(Vue) {
  if (install.installed) return;

  Vue.component(Header.name, Header);
  Vue.component(Button.name, Button);
  Vue.component(Cell.name, Cell);
  Vue.component(CellSwipe.name, CellSwipe);
  Vue.component(Field.name, Field);
  Vue.component(Badge.name, Badge);
  Vue.component(Switch.name, Switch);
  Vue.component(Spinner.name, Spinner);
  Vue.component(TabItem.name, TabItem);
  Vue.component(TabContainerItem.name, TabContainerItem);
  Vue.component(TabContainer.name, TabContainer);
  Vue.component(Navbar.name, Navbar);
  Vue.component(Tabbar.name, Tabbar);
  Vue.component(Search.name, Search);
  Vue.component(Checklist.name, Checklist);
  Vue.component(Radio.name, Radio);
  Vue.component(Loadmore.name, Loadmore);
  Vue.component(Actionsheet.name, Actionsheet);
  Vue.component(Popup.name, Popup);
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  Vue.component(Range.name, Range);
  Vue.component(Picker.name, Picker);
  Vue.component(Progress.name, Progress);
  Vue.component(DatetimePicker.name, DatetimePicker);
  Vue.component(IndexList.name, IndexList);
  Vue.component(IndexSection.name, IndexSection);
  Vue.component(PaletteButton.name, PaletteButton);
  Vue.use(InfiniteScroll);
  Vue.use(Lazyload, {
    loading: require('./assets/loading-spin.svg'),
    try: 3
  });

  Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
  Vue.$toast = Vue.prototype.$toast = Toast;
  Vue.$indicator = Vue.prototype.$indicator = Indicator;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  install,
  version: '2.0.5',
  Header,
  Button,
  Cell,
  CellSwipe,
  Field,
  Badge,
  Switch,
  Spinner,
  TabItem,
  TabContainerItem,
  TabContainer,
  Navbar,
  Tabbar,
  Search,
  Checklist,
  Radio,
  Loadmore,
  Actionsheet,
  Popup,
  Swipe,
  SwipeItem,
  Range,
  Picker,
  Progress,
  Toast,
  Indicator,
  MessageBox,
  InfiniteScroll,
  Lazyload,
  DatetimePicker,
  IndexList,
  IndexSection,
  PaletteButton
};
