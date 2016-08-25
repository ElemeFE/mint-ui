import { install, infiniteScroll } from 'vue-infinite-scroll';
import 'mint-ui/src/style/empty.css';

infiniteScroll.name = 'infinite-scroll';
infiniteScroll.install = install;
module.exports = infiniteScroll;
