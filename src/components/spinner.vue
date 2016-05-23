<template>
  <div class="kebab-spinner">
    <component :is="spinner"></component>
  </div>
</template>

<script>
const SPINNERS = [
  'snake',
  'double-bounce',
  'three-bounce',
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
 * kb-spinner
 * @module components/spinner
 * @desc 加载动画
 * @param {(string|number)} [type=snake] - 显示类型，传入类型名或者类型 id，可选 `snake`, `dobule-bounce`, `three-bounce`, `fading-circle`
 * @param {number} size - 尺寸
 * @param {string} color - 颜色
 *
 * @example
 * <kb-spinner type="snake"></kb-spinner>
 *
 * <!-- double-bounce -->
 * <kb-spinner :type="1"></kb-spinner>
 *
 * <!-- default snake -->
 * <kb-spinner :size="30" color="#999"></kb-spinner>
 */
export default {
  name: 'kb-spinner',

  computed: {
    spinner() {
      return `spinner-${parseSpinner(this.type)}`;
    }
  },

  components: {
    SpinnerSnake: require('./spinner/snake.vue'),
    SpinnerDoubleBounce: require('./spinner/double-bounce.vue'),
    SpinnerThreeBounce: require('./spinner/three-bounce.vue'),
    SpinnerFadingCircle: require('./spinner/fading-circle.vue')
  },

  props: {
    type: {
      type: [Number, String],
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

<style lang="css">
  @component-namespace kebab {
    @component spinner {
      text-align: center;
      & > div {
      }
    }
  }
</style>
