<template>
 <div>
  <template v-for="(item) in data">
       <slot name="a" :item="item" a="=7="></slot>
  </template>
 </div>
</template>

<script>
export default {
 props: {
  render: {
   type: Function
  },
  data: {
   type: Array,
   default: () => []
  }
 }
};
</script>