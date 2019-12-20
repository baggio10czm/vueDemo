<template>
    <div class="cascade" v-click-outside="close">
      <div class="title" @click="toggle">{{ value.map(item=>item.label).join('/') }}</div>
      <div class="cascade-content" v-if="isVisible">
        <cascadeItem :options="options" v-model="value" :level=0 @change="change"></cascadeItem>
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
    loadData: {
      type: Function,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isVisible: false,
      currentData: [],
      value: [],
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
    change(value) {
      const lastItem = value[value.length - 1];
      const { id } = lastItem;
      if (this.loadData) {
        this.loadData(id, children => this.handle(id, children));
      }
      this.$emit('input', value);
    },
    handle(id, children) {
      let stack = [...this.options];
      let index = 0;
      let currentItem;
      // eslint-disable-next-line no-plusplus
      while (stack[index++]) {
        currentItem = stack[index];
        if (currentItem.id !== id) {
          if (currentItem.children) {
            stack = stack.concat(currentItem.children);
          }
        } else {
          break;
        }
      }
      this.$set(currentItem, 'children', children);
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
    width 210px
    height 30px
    line-height: 30px
    text-indent 5px
    border 1px solid #ccc
</style>
