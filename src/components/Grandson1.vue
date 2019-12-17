<template>
    <div>
        孙子1:{{value}}
        {{this.parent.isSmoke}}
        <button @click="changeParent">修改父亲</button>
    </div>
</template>
<script>
export default {
    mounted(){
        // Provide 在当前的实例上 vm._prvoide
        // inject vm.$parent._prvoide
        // new Promie().then(()=>{
            //  this.$bus.$emit('有人找我了','xxx')
        // })
        this.$nextTick(()=>{
            this.$bus.$emit('有人找我了','bus传值')
        })
    },
    // 注入 parent组件
    inject:[ // this.parent
        'parent'
    ],
    methods:{
        changeParent(){ 
            // eventBus

            // $dispatch 只会通知自己的父亲 
            this.$dispatch('input',200)

            // 也可用 $parent.$parent
            //this.$parent.$emit('input',3000)
        }
    },
    props:{
        value:{
            type:Number,
            default :1
        }
    }
}
</script>