<template>
    <div>
        <p>儿子2 把-{{$attrs}}-所有数据传给子组件</p>
        <!-- $attrs 表示属性的集合 -->
        <!-- $listeners 表示的是方法的集合 -->
        <!-- v-bind 属性 -->
        <!--  v-on 方法-->
        <Grandson2 v-bind="$attrs" v-on="$listeners"></Grandson2>
    </div>
</template>

<script>

import Grandson2 from './Grandson2'
export default {
    components:{
        Grandson2
    },
    // 继承属性不在标签上显示
    inheritAttrs:false,
    mounted(){
        this.$bus.$on('有人找我了',function(value){
            // eslint-disable-next-line no-console
            console.log('son2:$bus.$on呵呵~~~~' + value)
        });
    }
}
</script>