<template>
    <div class="content">
      <div class="content-left">
        <div v-for="(item, index) in options" :key="index" >
          <div class="label" @click="select(item)">{{item.label}}</div>
        </div>
      </div>
      <div class="content-right">
        <div v-for="(item, index) in currentData" :key="index" >
          <div class="label">{{item.label}}</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'cascadeItem',
  props: {
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
      this.currentData = item.children;
    },
  },
};
</script>

<style lang="stylus" scoped>
  .content
    display flex
</style>
