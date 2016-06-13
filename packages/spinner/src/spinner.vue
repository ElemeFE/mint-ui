<template>
  <span><component :is="spinner"></component></span>
</template>

<script>
const SPINNERS = [
  'snake',
  'double-bounce',
  'triple-bounce',
  'fading-circle'
];
const parseSpinner = function(index) {
  if ({}.toString.call(index) === '[object Number]') {
    if (SPINNERS.length <= index) {
      console.warn(`'${index}' spinner not found, use the default spinner.`);
      index = 0;
    }
    return SPINNERS[index];
  }

  if (SPINNERS.indexOf(index) === -1) {
    console.warn(`'${index}' spinner not found, use the default spinner.`);
    index = SPINNERS[0];
  }
  return index;
};

/**
 * mt-spinner
 * @module components/spinner
 * @desc 加载动画
 * @param {(string|number)} [type=snake] - 显示类型，传入类型名或者类型 id，可选 `snake`, `dobule-bounce`, `triple-bounce`, `fading-circle`
 * @param {number} size - 尺寸
 * @param {string} color - 颜色
 *
 * @example
 * <mt-spinner type="snake"></mt-spinner>
 *
 * <!-- double-bounce -->
 * <mt-spinner :type="1"></mt-spinner>
 *
 * <!-- default snake -->
 * <mt-spinner :size="30" color="#999"></mt-spinner>
 */
export default {
  name: 'mt-spinner',

  computed: {
    spinner() {
      return `spinner-${parseSpinner(this.type)}`;
    }
  },

  components: {
    SpinnerSnake: require('./spinner/snake.vue'),
    SpinnerDoubleBounce: require('./spinner/double-bounce.vue'),
    SpinnerTripleBounce: require('./spinner/triple-bounce.vue'),
    SpinnerFadingCircle: require('./spinner/fading-circle.vue')
  },

  props: {
    type: {
      default: 0
    },
    size: {
      type: Number,
      default: 28
    },
    color: {
      type: String,
      default: '#ccc'
    }
  }
};
</script>
