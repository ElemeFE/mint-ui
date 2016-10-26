<template>
  <div class="mint-palette-button" :class="{ expand: expanded, 'mint-palette-button-active': transforming }"
    @animationend="onMainAnimationEnd" @webkitanimationend="onMainAnimationEnd" @mozanimationend="onMainAnimationEnd">
    <div class="mint-sub-button-container">
      <slot></slot>
    </div>
    <div @touchstart="toggle" class="mint-main-button" :style="mainButtonStyle">
      {{content}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mt-palette-button',
    data: function() {
      return {
        transforming: false,    // 是否正在执行动画
        expanded: false           // 是否已经展开子按钮
      };
    },
    props: {
      content: {
        type: String,
        default: ''
      },
      offset: {
        type: Number,           // 扇面偏移角，默认是四分之π，配合默认方向lt
        default: Math.PI / 4
      },
      direction: {
        type: String,
        default: 'lt'           // lt t rt this.radius rb b lb l 取值有8个方向，左上、上、右上、右、右下、下、左下、左，默认为左上
      },
      radius: {
        type: Number,
        default: 90
      },
      mainButtonStyle: {
        type: String,           // 应用到 mint-main-button 上的 class
        default: ''
      }
    },
    methods: {
      toggle(event) {
        if (!this.transforming) {
          if (this.expanded) {
            this.collapse(event);
          } else {
            this.expand(event);
          }
        }
      },
      onMainAnimationEnd(event) {
        this.transforming = false;
        this.$emit('expanded');
      },
      expand(event) {
        this.expanded = true;
        this.transforming = true;
        this.$emit('expand', event);
      },
      collapse(event) {
        this.expanded = false;
        this.$emit('collapse', event);
      }
    },
    mounted() {
      this.slotChildren = [];
      for (let i = 0; i < this.$slots.default.length; i++) {
        if (this.$slots.default[i].elm.nodeType !== 3) {
          this.slotChildren.push(this.$slots.default[i]);
        }
      }

      let css = '';
      let direction_arc = Math.PI * (3 + Math.max(['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l'].indexOf(this.direction), 0)) / 4;
      for (let i = 0; i < this.slotChildren.length; i++) {
        var arc = (Math.PI - this.offset * 2) / (this.slotChildren.length - 1) * i + this.offset + direction_arc;
        var x = Math.cos(arc) * this.radius;
        var y = Math.sin(arc) * this.radius;
        var item_css = '.expand .palette-button-' + this._uid + '-sub-' + i + '{transform:translate(' + x + 'px,' + y + 'px) rotate(720deg);transition-delay:' + 0.03 * i + 's}';
        css += item_css;

        this.slotChildren[i].elm.className += (' palette-button-' + this._uid + '-sub-' + i);
      }

      this.styleNode = document.createElement('style');
      this.styleNode.type = 'text/css';
      this.styleNode.rel = 'stylesheet';
      this.styleNode.title = 'palette button style';
      this.styleNode.appendChild(document.createTextNode(css));
      document.getElementsByTagName('head')[0].appendChild(this.styleNode);
    },
    destroyed() {
      if (this.styleNode) {
        this.styleNode.parentNode.removeChild(this.styleNode);
      }
    }
  };
</script>

<style>
  .mint-palette-button{
    display:inline-block;
    position:relative;
    border-radius:50%;
    width: 56px;
    height:56px;
    line-height:56px;
    text-align:center;
    transition:transform .1s ease-in-out;
  }

  .mint-main-button{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    border-radius:50%;
    background-color:blue;
    font-size:2em;
  }
  .mint-palette-button-active{
    animation: mint-zoom 0.5s ease-in-out;
  }
  .mint-sub-button-container>*{
    position:absolute;
    top:15px;
    left:15px;
    width:25px;
    height:25px;
    transition: transform .3s ease-in-out;
  }

  @keyframes mint-zoom{
    0% {transform:scale(1)}
    10% {transform:scale(1.1)}
    30% {transform:scale(0.9)}
    50% {transform:scale(1.05)}
    70% {transform:scale(0.95)}
    90% {transform:scale(1.01)}
    100% {transform:scale(1)}
  }
</style>