<template>
    <div>
        孙子2 {{$attrs}}
    </div>
</template>

<script>
export default {
    mounted(){
        this.$listeners.son()
    }
}
</script>