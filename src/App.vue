<template>
    <div>
        <Parent ></Parent>
    </div>
</template>
<script>
import Parent from './components/Parent'
export default {
    // 生命周期 不能是created
    mounted() {
        this.$broadcast('say')
    },
    components:{
        Parent
    }
}
</script>