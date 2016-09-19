<template>
  <mt-popup :visible.sync="visible" position="bottom" class="mint-datetime">
    <mt-picker
      :slots="dateSlots"
      @change="onChange"
      :visible-item-count="7"
      class="mint-datetime-picker"
      v-ref:picker
      show-toolbar>
      <span class="mint-datetime-action mint-datetime-cancel" @click="visible = false">{{ cancelText }}</span>
      <span class="mint-datetime-action mint-datetime-confirm" @click="confirm">{{ confirmText }}</span>
    </mt-picker>
  </mt-popup>
</template>

<style lang="css">
  @import "../../../src/style/var.css";

  @component-namespace mint {
    @component datetime {
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
  import picker from 'mint-ui/packages/picker/index.js';
  import popup from 'mint-ui/packages/popup/index.js';
  if (process.env.NODE_ENV === 'component') {
    require('mint-ui/packages/picker/style.css');
    require('mint-ui/packages/popup/style.css');
  }

  const FORMAT_MAP = {
    Y: 'year',
    M: 'month',
    D: 'date',
    H: 'hour',
    m: 'minute'
  };

  export default {
    name: 'mt-datetime-picker',

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
      startDate: Date,
      endDate: Date,
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
        startYear: null,
        endYear: null,
        startMonth: 1,
        endMonth: 12,
        startDay: 1,
        endDay: 31,
        selfTriggered: false,
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
        if (this.selfTriggered) {
          this.selfTriggered = false;
          return;
        }
        this.isSlotChange = true;
        let currentValue = this.getValue(values);
        if (this.type.indexOf('date') > -1) {
          if (currentValue.getTime() < this.startDate.getTime()) {
            this.value = this.startDate;
            currentValue = this.startDate;
            this.selfTriggered = true;
            this.setSlots();
          }
          if (currentValue.getTime() > this.endDate.getTime()) {
            this.value = this.endDate;
            currentValue = this.endDate;
            this.selfTriggered = true;
            this.setSlots();
          }
          if (this.isShortMonth(this.getTrueValue(values[1]))) {
            if (this.shortMonthDates.indexOf(values[2]) === -1) {
              picker.setSlotValue(2, this.dateSlots[2].values[0]);
              return;
            }
            this.dateSlots[2].values = this.shortMonthDates.map(item => item);
          } else if (this.getTrueValue(values[1]) === 2) {
            if (this.isLeapYear(this.getTrueValue(values[0]))) {
              if (this.leapFebDates.indexOf(values[2]) === -1) {
                picker.setSlotValue(2, this.dateSlots[2].values[0]);
                return;
              }
              this.dateSlots[2].values = this.leapFebDates.map(item => item);
            } else {
              if (this.febDates.indexOf(values[2]) === -1) {
                picker.setSlotValue(2, this.dateSlots[2].values[0]);
                return;
              }
              this.dateSlots[2].values = this.febDates.map(item => item);
            }
          } else {
            this.dateSlots[2].values = this.longMonthDates.map(item => item);
          }
        }
        this.value = currentValue;
        if (this.type.indexOf('date') > -1) {
          this.rimDetect(this.dateSlots[2].values);
        }
        this.$emit('change', this.value);
      },

      rimDetect(monthDates) {
        this.dateSlots[1].values = this.fillValues('M', 1, 12);
        if (this.value.getFullYear() === this.startDate.getFullYear()) {
          this.trimSlots('start', this.startDate, 1);
          if (this.value.getMonth() === this.startDate.getMonth()) {
            this.trimSlots('start', this.startDate, 2);
          } else {
            this.dateSlots[2].values = monthDates.map(item => item);
          }
        }
        if (this.value.getFullYear() === this.endDate.getFullYear()) {
          this.trimSlots('end', this.endDate, 1);
          if (this.value.getMonth() === this.endDate.getMonth()) {
            this.trimSlots('end', this.endDate, 2);
          } else {
            this.dateSlots[2].values = monthDates.map(item => item);
          }
        }
      },

      trimSlots(rim, value, index) {
        let arr = [value.getFullYear(), value.getMonth() + 1, value.getDate(), value.getHours(), value.getMinutes()];
        if (rim === 'start') {
          while (this.getTrueValue(this.dateSlots[index].values[0]) < arr[index]) {
            this.dateSlots[index].values.shift();
          }
        }
        if (rim === 'end') {
          let lastIndex = this.dateSlots[index].values.length - 1;
          while (this.getTrueValue(this.dateSlots[index].values[lastIndex]) > arr[index]) {
            this.dateSlots[index].values.pop();
            lastIndex--;
          }
        }
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
          M: [this.startMonth, this.endMonth],
          D: [this.startDay, this.endDay],
          H: [this.startHour, this.endHour],
          m: [0, 59]
        };
        let typesArr = this.typeStr.split('');
        typesArr.forEach(type => {
          if (INTERVAL_MAP[type]) {
            this.pushSlots.apply(null, [type].concat(INTERVAL_MAP[type]));
          }
        });
        if (this.typeStr === 'Hm') {
          this.dateSlots.splice(1, 0, {
            divider: true,
            content: ':'
          });
        }
      },

      isDateString(str) {
        return /\d{4}(\-|\/|.)\d{1,2}\1\d{1,2}/.test(str);
      },

      getYear(value) {
        return this.isDateString(value) ? value.split(' ')[0].split('-')[0] : value.getFullYear();
      },

      getMonth(value) {
        return this.isDateString(value) ? value.split(' ')[0].split('-')[1] : value.getMonth() + 1;
      },

      getDate(value) {
        return this.isDateString(value) ? value.split(' ')[0].split('-')[2] : value.getDate();
      },

      getHour(value) {
        if (this.isDateString(value)) {
          const str = value.split(' ')[1] || '00:00:00';
          return str.split(':')[0];
        }
        return value.getHours();
      },

      getMinute(value) {
        if (this.isDateString(value)) {
          const str = value.split(' ')[1] || '00:00:00';
          return str.split(':')[1];
        }
        return value.getMinutes();
      },

      setSlots() {
        const setSlotValue = this.$refs.picker.setSlotValue;
        if (this.type === 'time' && typeof this.value === 'string') {
          let valueArr = this.value.split(':');
          setSlotValue(0, this.hourFormat.replace('{value}', valueArr[0]));
          setSlotValue(1, this.minuteFormat.replace('{value}', valueArr[1]));
        }
        if (this.type !== 'time' && (({}).toString.call(this.value) === '[object Date]' || this.isDateString(this.value))) {
          let year = this.getYear(this.value);
          let month = this.getMonth(this.value);
          let date = this.getDate(this.value);
          setSlotValue(0, this.yearFormat.replace('{value}', year));
          setSlotValue(1, this.monthFormat.replace('{value}', ('0' + month).slice(-2)));
          setSlotValue(2, this.dateFormat.replace('{value}', ('0' + date).slice(-2)));
          if (this.type === 'datetime') {
            let hour = this.getHour(this.value);
            let minute = this.getMinute(this.value);
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
        this.$nextTick(() => {
          this.$refs.picker.$children.forEach(child => {
            child.doOnValueChange();
          });
        });
        if (!this.isSlotChange) {
          this.setSlots();
        } else {
          this.isSlotChange = false;
        }
      }
    },

    created() {
      let now = new Date();
      this.startDate = this.startDate || new Date(now.getFullYear() - 10, 0, 1);
      this.endDate = this.endDate || new Date(now.getFullYear() + 10, 11, 31);
      this.startYear = this.startDate.getFullYear();
      this.endYear = this.endDate.getFullYear();
      if (this.startYear === this.endYear) {
        this.startMonth = this.startDate.getMonth() + 1;
        this.endMonth = this.endDate.getMonth() + 1;
        if (this.startMonth === this.endMonth) {
          this.startDay = this.startDate.getDate();
          this.endDay = this.endDate.getDate();
        }
      }
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
      if (!this.value) {
        if (this.type.indexOf('date') > -1) {
          this.value = this.startDate;
          this.trimSlots('start', this.value, 1);
          this.trimSlots('start', this.value, 2);
        } else {
          this.value = '00:00';
        }
      }
    }
  };
</script>
