<template>
  <x-cell
    class="mint-field"
    :title="label"
    v-clickoutside="active = false"
    :class="[{ 'is-nolabel': !label }, {
      'is-textarea': type === 'textarea'
    }]">
    <textarea
      class="mint-field-core"
      :placeholder="placeholder"
      v-if="type === 'textarea'"
      :rows="rows"
      v-model="value">
    </textarea>
    <input
      class="mint-field-core"
      :placeholder="placeholder"
      :number="type === 'number'"
      v-else
      :type="type"
      @focus="active = true"
      v-model="value">
    <div
      @click="value = ''"
      class="mint-field-clear"
      v-show="value && type !== 'textarea' && active">
      <i class="mintui mintui-field-error"></i>
    </div>
    <span class="mint-field-state" v-if="state" :class="['is-' + state]">
      <i class="mintui" :class="['mintui-field-' + state]"></i>
    </span>
  </x-cell>
</template>

<script>
import 'src/assets/font/iconfont.css';
import XCell from 'src/components/cell';
import 'cell/style.css';
import Clickoutside from 'vue-clickoutside';

/**
 * mt-field
 * @desc 编辑器，依赖 cell
 * @module components/field
 *
 * @param {string} [type=text] - field 类型，接受 text, number, email, url, tel, date, datetime, password, textarea 等
 * @param {string} [label] - 标签
 * @param {string} [rows] - textarea 的 rows
 * @param {string} [placeholder] - placeholder
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

  directives: {
    Clickoutside
  },

  props: {
    type: {
      type: String,
      default: 'text'
    },
    rows: String,
    label: String,
    placeholder: String,
    state: {
      type: String,
      default: 'default'
    },
    value: ''
  },

  components: {
    XCell
  }
};
</script>

<style lang="css">
  @import "../style/var.css";

  @component-namespace mint {
    @component field {
      @when textarea {
        align-items: inherit;

        .mint-cell-title {
          padding-top: 5px;
        }
      }

      &.mint-cell {
        padding: 9px 10px;
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
      }

      @when nolabel {
        .mint-cell-title {
          display: none;
        }
      }
    }
  }
</style>
