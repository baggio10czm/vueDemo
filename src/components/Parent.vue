<template>
    <div>
        父组件钱数： {{mny}}
        <!-- <Son1 :value="mny" @update:value="(value)=>this.mny=value"></Son1> -->

        <!-- <Son1 :value.sync="mny"></Son1> -->
        <!-- ref可以用到dom元素上 获取的是dom节点 -->
        <!-- 放到组件上获取的就是当前的组件 -->
        <Son1 :value="mny" @input="change" ref="son1"></Son1>

        <!-- 什么时候使用.sync 、 v-model -->

        <!-- 多层级如何传递数据 $parent -->

        <!-- ------ -->
        <Son2 name="珠峰" age="10" address="回龙观" @son="son"></Son2>


    </div>
</template>

<script>
// 希望数据被儿子公用  不希望传递来传递去 像react context Provider consumer
// 注入数据 可以 随便写 可以把父组件直接注入进去
// eventBus 定义到了全局上
import Son1 from './Son1.vue';
import Son2 from './Son2.vue';

export default {
  mounted() {
    this.$refs.son1.refFn(); // 我也一个组件
  },
  data() {
    return { mny: 100, isSmoke: '不要吸烟' };
  },
  // 一般业务中不使用，框架里有用
  provide() {
    return { parent: this };
  },
  methods: {
    son() {
      // eslint-disable-next-line no-console
      console.log('parent:Grandson2触发了');
    },
    change(value) {
      this.mny = value;
    },
  },
  components: {
    Son1,
    Son2,
  },
};
</script>
