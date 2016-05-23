<template>
  <div class="page-cell">
    <div class="page-title">Cell</div>
    <kb-cell title="标题文字"></kb-cell>
    <kb-cell title="标题文字" value="说明文字"></kb-cell>
    <kb-cell title="标题文字" icon="more" value="带 icon"></kb-cell>
    <kb-cell title="标题文字" icon="more">
      <span> icon 是图片</span>
      <img slot="icon" src="../assets/100x100.png">
    </kb-cell>
    <kb-cell title="标题文字" is-link value="带链接"></kb-cell>
    <kb-cell title="标题文字" is-link>
      <span style="color: green">这里是元素</span>
    </kb-cell>
    <kb-cell title="标题文字">
      <kb-button size="small" type="primary" icon="back">按钮</kb-button>
    </kb-cell>
  </div>
</template>

<script>
export default {
  name: 'page-cell'
};
</script>
