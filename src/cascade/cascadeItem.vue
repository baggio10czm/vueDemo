<template>
    <div class="content">
      <div class="content-left">
        <div v-for="(item, index) in options" :key="index" >
          <div class="label" @click="select(item)">{{item.label}}</div>
        </div>
      </div>
      <div class="content-right" v-if="currentData && currentData.length">
        <cascadeItem :options="currentData" :level=level+1
                     v-model="value" @change="change"></cascadeItem>
      </div>
    </div>
</template>

<script>
export default {
  name: 'cascadeItem',
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    level: {
      type: Number,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentSelected: null,
    };
  },
  computed: {
    currentData() {
      // 不能使用 this.currentSelected && this.currentSelected.children
      // 因为 如果有二级以上的层级时 点回第一层 第三层和以上的不会变化，
      // 因为他们对应的currentSelected 没有发生改变，所以数据不会变化
      return this.value[this.level] && this.value[this.level].children;
    },
  },
  methods: {
    change() {
      this.$emit('change', this.value);
    },
    select(item) {
      this.currentSelected = item;
      this.value[this.level] = item;
      // 每次点击把下层的所有数据（包括后面N层）删除
      this.value.splice(this.level + 1);
      this.$emit('change', this.value);
    },
  },
};
</script>

<style lang="stylus" scoped>
  .content
    display flex
    .content-left,.content-right
      height: 200px
      overflow-y auto
      padding: 10px
      margin-right: 10px
      border: 1px solid #ccc
</style>
