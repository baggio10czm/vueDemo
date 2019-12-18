<template>
    <div class="cascade" v-click-outside="close">
      <div class="title" @click="toggle"></div>
      <div class="cascade-content" v-if="isVisible">
        <cascadeItem :options="options"></cascadeItem>
      </div>
    </div>
</template>

<script>
// 可以在全局上挂个事件 ，当点击的时候校验一下点击的是否是cascader中的内容
// 判断当前点击的是否在某个元素

// 如果你希望对某个元素拥有一系列的操作 你可以封装一个指令 （自定义指令）
// click-outside

// export default 导出的是值
// export xxx 导出的是接口
// eslint-disable-next-line import/extensions
import clickOutside from '../directives/clickOutside.js';
import cascadeItem from './cascadeItem.vue';

export default {
  name: 'Cascade',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isVisible: false,
      currentData: [],
    };
  },
  // 指令是一个方法，有自己的生命周期  clickOutside(){} 这样写 数据绑定-bind 和 更新的时候执行-update
  directives: clickOutside,
  methods: {
    close() {
      this.isVisible = false;
    },
    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
  components: {
    cascadeItem,
  },
};
</script>

<style lang="stylus" scoped>
  .cascade
   display inline-block
  .title
    width 150px
    height 30px
    border 1px solid #ccc
</style>
