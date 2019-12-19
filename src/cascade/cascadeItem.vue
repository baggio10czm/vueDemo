<template>
    <div class="content">
      <div class="content-left">
        <div v-for="(item, index) in options" :key="index" >
          <div class="label" @click="select(item)">{{item.label}}</div>
        </div>
      </div>
      <div class="content-right" v-if="currentData && currentData.length">
        <cascadeItem :options="currentData" :level=level+1 v-model="value"></cascadeItem>
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
      currentData: [],
    };
  },
  methods: {
    select(item) {
      this.value[this.level] = item;
      this.value.splice(this.level + 1);
      this.$emit('change', this.value);
      this.currentData = item.children;
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
