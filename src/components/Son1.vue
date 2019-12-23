<template>
    <div style="padding: 10px;">
        <p style="margin-bottom: 10px;">儿子1: {{value}} <button @click="change">点击修改</button></p>
        <Grandson1 :value="value" @say="say"></Grandson1>
    </div>
</template>

<script>
// 单向数据流 父亲给儿子绑定一个时间
import Grandson1 from './Grandson1.vue';

export default {
  name: 'son1',
  components: {
    Grandson1,
  },
  methods: {
    say() {
      // eslint-disable-next-line no-console
      console.log('son1: app.vue.$broadcast 我很帅');
    },
    refFn() {
      // eslint-disable-next-line no-console
      console.log('son1: $refFn-调用');
    },
    change() {
      // this.$emit('update:value',200)
      this.$emit('input', 300);
    },
  },
  props: {
    value: {
      type: Number,
      default: 1,
    },
  },
};
</script>
