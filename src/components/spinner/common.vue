<script>
  export default {
    computed: {
      color() {
        return this.$parent.color;
      },

      size() {
        return this.$parent.size + 'px';
      }
    }
  };
</script>