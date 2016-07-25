<template>
  <mt-popup :visible.sync="visible" position="bottom" class="mint-timepicker">
    <mt-picker
      :slots="dateSlots"
      @change="onChange"
      :visible-item-count="7"
      class="mint-timepicker-picker"
      v-ref:picker
      show-toolbar>
      <span class="mint-timepicker-action mint-timepicker-cancel" @click="visible = false">{{ cancelText }}</span>
      <span class="mint-timepicker-action mint-timepicker-confirm" @click="confirm">{{ confirmText }}</span>
    </mt-picker>
  </mt-popup>
</template>

<style lang="css">
  @import "../../../src/style/var.css";

  @component-namespace mint {
    @component timepicker {
      width: 100%;
      
      .picker-slot-wrapper, .picker-item {
        backface-visibility: hidden;
      }
      
      .picker-toolbar {
        border-bottom: solid 1px #eaeaea;
      }
      
      @descendent action {
        display: inline-block;
        width: 50%;
        text-align: center;
        line-height: 40px;
        font-size: 16px;
        color: $color-blue;
      }
      
      @descendent cancel {
        float: left;
      }
  
      @descendent confirm {
        float: right;
      }
    }
  }
</style>

<script type="text/babel">
  import picker from 'packages/picker/index';
  import popup from 'packages/popup/index';

  const FORMAT_MAP = {
    Y: 'year',
    M: 'month',
    D: 'date',
    H: 'hour',
    m: 'minute'
  };

  export default {
    name: 'mt-timepicker',

    props: {
      visible: {
        type: Boolean,
        default: false
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      confirmText: {
        type: String,
        default: '确定'
      },
      type: {
        type: String,
        default: 'datetime'
      },
      startYear: {
        type: Number,
        default: 2000
      },
      endYear: {
        type: Number,
        default: (new Date()).getFullYear()
      },
      startHour: {
        type: Number,
        default: 0
      },
      endHour: {
        type: Number,
        default: 23
      },
      yearFormat: {
        type: String,
        default: '{value}'
      },
      monthFormat: {
        type: String,
        default: '{value}'
      },
      dateFormat: {
        type: String,
        default: '{value}'
      },
      hourFormat: {
        type: String,
        default: '{value}'
      },
      minuteFormat: {
        type: String,
        default: '{value}'
      },
      value: null
    },

    data() {
      return {
        isSlotChange: false,
        dateSlots: [],
        shortMonthDates: [],
        longMonthDates: [],
        febDates: [],
        leapFebDates: []
      };
    },

    components: {
      'mt-picker': picker,
      'mt-popup': popup
    },

    methods: {
      isLeapYear(year) {
        return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
      },

      isShortMonth(month) {
        return [4, 6, 9, 11].indexOf(month) > -1;
      },

      getTrueValue(formattedValue) {
        while (isNaN(parseInt(formattedValue, 10))) {
          formattedValue = formattedValue.slice(1);
        }
        return parseInt(formattedValue, 10);
      },

      getValue(values) {
        let value;
        if (this.type === 'time') {
          value = values.map(value => ('0' + this.getTrueValue(value)).slice(-2)).join(':');
        } else {
          let year = this.getTrueValue(values[0]);
          let month = this.getTrueValue(values[1]);
          let date = this.getTrueValue(values[2]);
          let hour = this.typeStr.indexOf('H') > -1 ? this.getTrueValue(values[this.typeStr.indexOf('H')]) : 0;
          let minute = this.typeStr.indexOf('m') > -1 ? this.getTrueValue(values[this.typeStr.indexOf('m')]) : 0;
          value = new Date(year, month - 1, date, hour, minute);
        }
        return value;
      },

      onChange(picker, values) {
        this.isSlotChange = true;
        this.value = this.getValue(values);
        if (this.type.indexOf('date') > -1) {
          if (this.isShortMonth(this.getTrueValue(values[1]))) {
            if (this.shortMonthDates.indexOf(values[2]) === -1) {
              picker.setSlotValue(2, this.dateSlots[2].values[0]);
              return;
            }
            this.dateSlots[2].values = this.shortMonthDates;
          } else if (this.getTrueValue(values[1]) === 2) {
            if (this.isLeapYear(this.getTrueValue(values[0]))) {
              if (this.leapFebDates.indexOf(values[2]) === -1) {
                picker.setSlotValue(2, this.dateSlots[2].values[0]);
                return;
              }
              this.dateSlots[2].values = this.leapFebDates;
            } else {
              if (this.febDates.indexOf(values[2]) === -1) {
                picker.setSlotValue(2, this.dateSlots[2].values[0]);
                return;
              }
              this.dateSlots[2].values = this.febDates;
            }
          } else {
            this.dateSlots[2].values = this.longMonthDates;
          }
        }
        this.$emit('change', this.value);
      },

      fillValues(type, start, end) {
        let values = [];
        for (let i = start; i <= end; i++) {
          if (i < 10) {
            values.push(this[`${FORMAT_MAP[type]}Format`].replace('{value}', ('0' + i).slice(-2)));
          } else {
            values.push(this[`${FORMAT_MAP[type]}Format`].replace('{value}', i));
          }
        }
        return values;
      },

      pushSlots(type, start, end) {
        this.dateSlots.push({
          flex: 1,
          values: this.fillValues(type, start, end)
        });
      },

      generateSlots() {
        const INTERVAL_MAP = {
          Y: [this.startYear, this.endYear],
          M: [1, 12],
          D: [1, 31],
          H: [this.startHour, this.endHour],
          m: [0, 59]
        };
        let typesArr = this.typeStr.split('');
        typesArr.forEach(type => {
          if (INTERVAL_MAP[type]) {
            this.pushSlots(type, ...INTERVAL_MAP[type]);
          }
        });
        if (this.typeStr === 'Hm') {
          this.dateSlots.splice(1, 0, {
            divider: true,
            content: ':'
          });
        }
      },

      setSlots() {
        const setSlotValue = this.$refs.picker.setSlotValue;
        if (this.type === 'time' && typeof this.value === 'string') {
          let [hour, minute] = this.value.split(':');
          setSlotValue(0, this.hourFormat.replace('{value}', hour));
          setSlotValue(1, this.minuteFormat.replace('{value}', minute));
        }
        if (this.type !== 'time' && ({}).toString.call(this.value) === '[object Date]') {
          let year = this.value.getFullYear();
          let month = this.value.getMonth() + 1;
          let date = this.value.getDate();
          setSlotValue(0, this.yearFormat.replace('{value}', year));
          setSlotValue(1, this.monthFormat.replace('{value}', ('0' + month).slice(-2)));
          setSlotValue(2, this.dateFormat.replace('{value}', ('0' + date).slice(-2)));
          if (this.type === 'datetime') {
            let hour = this.value.getHours();
            let minute = this.value.getMinutes();
            setSlotValue(3, this.hourFormat.replace('{value}', ('0' + hour).slice(-2)));
            setSlotValue(4, this.minuteFormat.replace('{value}', ('0' + minute).slice(-2)));
          }
        }
      },

      confirm() {
        this.visible = false;
        this.$emit('confirm', this.value);
      }
    },

    computed: {
      typeStr() {
        if (this.type === 'time') {
          return 'Hm';
        } else if (this.type === 'date') {
          return 'YMD';
        } else {
          return 'YMDHm';
        }
      }
    },

    watch: {
      value() {
        if (!this.isSlotChange) {
          this.setSlots();
        } else {
          this.isSlotChange = false;
        }
      }
    },

    created() {
      for (let i = 1; i <= 28; i++) {
        this.febDates.push(this.dateFormat.replace('{value}', ('0' + i).slice(-2)));
      }
      this.leapFebDates = this.febDates.concat(this.dateFormat.replace('{value}', '29'));
      this.shortMonthDates = this.leapFebDates.concat(this.dateFormat.replace('{value}', '30'));
      this.longMonthDates = this.shortMonthDates.concat(this.dateFormat.replace('{value}', '31'));
      this.generateSlots();
    },

    ready() {
      this.setSlots();
    }
  };
</script>
