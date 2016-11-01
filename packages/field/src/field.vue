<template>
  <x-cell
    class="mint-field"
    :title="label"
    v-clickoutside="active = false"
    :class="[{
      'is-textarea': type === 'textarea',
      'is-nolabel': !label
    }]">
    <textarea
      v-el:textarea
      class="mint-field-core"
      :placeholder="placeholder"
      v-if="type === 'textarea'"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly"
      v-model="value">
    </textarea>
    <input
      v-el:input
      class="mint-field-core"
      :placeholder="placeholder"
      :number="type === 'number'"
      v-else
      :type="type"
      @focus="active = true"
      :disabled="disabled"
      :readonly="readonly"
      v-model="value">
    <div
      @click="handleClear"
      v-if="!disableClear"
      class="mint-field-clear"
      v-show="value && type !== 'textarea' && active">
      <i class="mintui mintui-field-error"></i>
    </div>
    <span class="mint-field-state" v-if="state" :class="['is-' + state]">
      <i class="mintui" :class="['mintui-field-' + state]"></i>
    </span>
    <div class="mint-field-other">
      <slot></slot>
    </div>
  </x-cell>
</template>

<script>
import XCell from 'mint-ui/packages/cell/index.js';
import Clickoutside from 'vue-clickoutside';
if (process.env.NODE_ENV === 'component') {
  require('mint-ui/packages/cell/style.css');
}

/**
 * mt-field
 * @desc 编辑器，依赖 cell
 * @module components/field
 *
 * @param {string} [type=text] - field 类型，接受 text, number, email, url, tel, date, datetime, password, textarea 等
 * @param {string} [label] - 标签
 * @param {string} [rows] - textarea 的 rows
 * @param {string} [placeholder] - placeholder
 * @param {string} [disabled] - disabled
 * @param {string} [readonly] - readonly
 * @param {string} [state] - 表单校验状态样式，接受 error, warning, success
 *
 * @example
 * <mt-field label="用户名"></mt-field>
 * <mt-field label="密码" placeholder="请输入密码"></mt-field>
 * <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></mt-field>
 * <mt-field label="邮箱" placeholder="成功状态" state="success"></mt-field>
 */
export default {
  name: 'mt-field',

  data() {
    return {
      active: false
    };
  },

  directives: { Clickoutside },

  components: { XCell },

  props: {
    type: {
      type: String,
      default: 'text'
    },
    rows: String,
    label: String,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    disableClear: Boolean,
    state: {
      type: String,
      default: 'default'
    },
    value: {},
    attr: Object
  },

  methods: {
    handleClear() {
      if (this.disabled || this.readonly) return;
      this.value = '';
    }
  },

  watch: {
    attr: {
      immediate: true,
      handler(attrs) {
        this.$nextTick(() => {
          const target = [this.$els.input, this.$els.textarea];
          target.forEach(el => {
            if (!el || !attrs) return;
            Object.keys(attrs).map(name => el.setAttribute(name, attrs[name]));
          });
        });
      }
    }
  }
};
</script>

<style lang="css">
  @import "../../../src/style/var.css";

  @component-namespace mint {
    @component field {
      display: flex;

      @when textarea {
        align-items: inherit;

        .mint-cell-title {
          padding: 10px 0;
        }

        .mint-cell-value {
          padding: 5px 0;
        }
      }

      .mint-cell-title {
        width: 105px;
        flex: none;
      }

      .mint-cell-value {
        flex: 1;
        color: inherit;
        display: flex;
      }

      @descendent core {
        appearance: none;
        border-radius: 0;
        border: 0;
        flex: 1;
        outline: 0;
        line-height: 1.6;
        font-size: inherit;
        width: 100%;
      }

      @descendent clear {
        opacity: .2;
      }

      @descendent state {
        color: inherit;
        margin-left: 20px;

        .mintui {
          font-size: 20px;
        }

        @when error {
          color: $error-color;
        }

        @when warning {
          color: $warning-color;
        }

        @when success {
          color: $success-color;
        }

        @when default {
          margin-left: 0;
        }
      }

      @descendent other {
        position: absolute 0 0 * *;
      }

      @when nolabel {
        .mint-cell-title {
          display: none;
        }
      }
    }
  }
</style>
