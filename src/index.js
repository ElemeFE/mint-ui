import Header from '../packages/header';
import Button from '../packages/button';
import Cell from '../packages/cell';
import CellSwipe from '../packages/cell-swipe';
import Field from '../packages/field';
import Badge from '../packages/badge';
import Switch from '../packages/switch';
import Spinner from '../packages/spinner';
import TabItem from '../packages/tab-item';
import TabContainerItem from '../packages/tab-container-item';
import TabContainer from '../packages/tab-container';
import Navbar from '../packages/navbar';
import Tabbar from '../packages/tabbar';
import Search from '../packages/search';
import Checklist from '../packages/checklist';
import Radio from '../packages/radio';
import Loadmore from '../packages/loadmore';
import Actionsheet from '../packages/actionsheet';
import Popup from '../packages/popup';
import Swipe from '../packages/swipe';
import SwipeItem from '../packages/swipe-item';
import Range from '../packages/range';
import Picker from '../packages/picker';
import Progress from '../packages/progress';
import Toast from '../packages/toast';
import Indicator from '../packages/indicator';
import MessageBox from '../packages/message-box';
import InfiniteScroll from '../packages/infinite-scroll';
import Lazyload from '../packages/lazyload';
import DatetimePicker from '../packages/datetime-picker';
import IndexList from '../packages/index-list';
import IndexSection from '../packages/index-section';
import PaletteButton from '../packages/palette-button';
import '../src/assets/font/iconfont.css';
import merge from './utils/merge';

const version = '2.2.13';
const install = function(Vue, config = {}) {
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
  Vue.use(Lazyload, merge({
    loading: require('./assets/loading-spin.svg'),
    attempt: 3
  }, config.lazyload));

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
  version,
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
