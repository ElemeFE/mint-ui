<template>
  <div class="picker" :class="{ 'picker-3d': rotateEffect }">
    <div class="picker-toolbar" v-if="showToolbar"><slot></slot></div>
    <div class="picker-items">
      <div class="mask-top border-bottom-1px"></div>
      <div class="mask-bottom border-top-1px"></div>
      <picker-slot v-for="slot in slots" :valueKey="valueKey" :values="slot.values || []" :text-align="slot.textAlign || 'center'" :visible-item-count="visibleItemCount" :class-name="slot.className" :flex="slot.flex" v-model="values[slot.valueIndex]" :rotate-effect="rotateEffect" :divider="slot.divider" :content="slot.content" :itemHeight="itemHeight" :default-index="slot.defaultIndex"></picker-slot>
      <div class="picker-center-highlight" :style="{ height: itemHeight + 'px', marginTop: -itemHeight / 2 + 'px' }"></div>
    </div>
  </div>
</template>

<style>
  .picker {
    overflow: hidden;
    z-index: 600;
  }

  .picker-toolbar {
    height: 40px;
  }

  .picker-items {
    display: flex;
    justify-content: center;
    padding: 0;
    text-align: right;
    font-size: 24px;
    position: relative;
  }

  .picker-center-highlight {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    width: 100%;
    top: 50%;
    margin-top: -18px;
    pointer-events: none;
  }

  .border-bottom-1px,
   border-top-1px {
    position: relative;
    }

  .border-bottom-1px:after,
  .border-bottom-1px:before,
  .border-top-1px:after,
  .border-top-1px:before {
   content: "";
   display: block;
   position: absolute;
   -webkit-transform-origin: 0 0;
   transform-origin: 0 0;
  }

  .border-bottom-1px:after {
   border-bottom: 1px solid #eaeaea;
   left: 0;
   bottom: 0;
   width: 100%;
   -webkit-transform-origin: 0 bottom;
   transform-origin: 0 bottom;
    }

  .mask-top {
    position: absolute;
    top: 0;
    background: -webkit-linear-gradient(bottom, hsla(0, 0%, 100%, .4), hsla(0, 0%, 100%, .8));
    background: linear-gradient(bottom, hsla(0, 0%, 100%, .4), hsla(0, 0%, 100%, .8));
    }

  .mask-bottom {
    position: absolute;
    bottom: 1px;
    background: -webkit-linear-gradient(top, hsla(0, 0%, 100%, .4), hsla(0, 0%, 100%, .8));
    background: linear-gradient(top, hsla(0, 0%, 100%, .4), hsla(0, 0%, 100%, .8));
    }

   .mask-bottom,
   .mask-top {
    z-index: 10;
    width: 100%;
    height: calc(50% - 18px);
    height: -webkit-calc(50% - 18px);
    pointer-events: none;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    }

    .border-top-1px:before {
        border-top: 1px solid  #eaeaea;
        left: 0;
        top: 0;
        width: 100%;
    }

  .picker-3d .picker-items {
    perspective:none!important;
  }


  .picker-center-highlight:before {
    left: 0;
    top: 0;
    bottom: auto;
    right: auto;
  }

  .picker-center-highlight:after {
    left: 0;
    bottom: 0;
    right: auto;
    top: auto;
  }
</style>

<script type="text/babel">
  export default {
    name: 'mt-picker',

    componentName: 'picker',

    props: {
      slots: {
        type: Array
      },
      showToolbar: {
        type: Boolean,
        default: false
      },
      visibleItemCount: {
        type: Number,
        default: 5
      },
      valueKey: String,
      rotateEffect: {
        type: Boolean,
        default: true
      },
      itemHeight: {
        type: Number,
        default: 36
      }
    },

    created() {
      this.$on('slotValueChange', this.slotValueChange);
      var slots = this.slots || [];
      this.values = [];
      var values = this.values;
      var valueIndexCount = 0;
      slots.forEach(slot => {
        if (!slot.divider) {
          slot.valueIndex = valueIndexCount++;
          values[slot.valueIndex] = (slot.values || [])[slot.defaultIndex || 0];
          this.slotValueChange();
        }
      });
    },

    methods: {
      slotValueChange() {
        this.$emit('change', this, this.values);
      },

      getSlot(slotIndex) {
        var slots = this.slots || [];
        var count = 0;
        var target;
        var children = this.$children.filter(child => child.$options.name === 'picker-slot');

        slots.forEach(function(slot, index) {
          if (!slot.divider) {
            if (slotIndex === count) {
              target = children[index];
            }
            count++;
          }
        });

        return target;
      },
      getSlotValue(index) {
        var slot = this.getSlot(index);
        if (slot) {
          return slot.value;
        }
        return null;
      },
      setSlotValue(index, value) {
        var slot = this.getSlot(index);
        if (slot) {
          slot.currentValue = value;
        }
      },
      getSlotValues(index) {
        var slot = this.getSlot(index);
        if (slot) {
          return slot.mutatingValues;
        }
        return null;
      },
      setSlotValues(index, values) {
        var slot = this.getSlot(index);
        if (slot) {
          slot.mutatingValues = values;
        }
      },
      getValues() {
        return this.values;
      },
      setValues(values) {
        var slotCount = this.slotCount;
        values = values || [];
        if (slotCount !== values.length) {
          throw new Error('values length is not equal slot count.');
        }
        values.forEach((value, index) => {
          this.setSlotValue(index, value);
        });
      }
    },

    computed: {
      values() {
        var slots = this.slots || [];
        var values = [];
        slots.forEach(function(slot) {
          if (!slot.divider) values.push(slot.value);
        });

        return values;
      },
      slotCount() {
        var slots = this.slots || [];
        var result = 0;
        slots.forEach(function(slot) {
          if (!slot.divider) result++;
        });
        return result;
      }
    },

    components: {
      PickerSlot: require('./picker-slot.vue')
    }
  };
</script>
