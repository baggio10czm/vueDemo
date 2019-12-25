<template>
    <div>
      <h1>————vue优化————</h1>
      <p> 不需要响应的数据不要发data里</p>
      <p> Spa页面采用keep-live 缓存组件</p>
      <p> 拆分组件好处：1，提高复用性、增加代码可维护性 2，减少渲染</p>
      <p> v-if  有阻断作用</p>
      <p> key 保证唯一性 最好不要用index 可用id等</p>
      <p> Object.freeze() 避免给属性加 getter 和 setter， 数据只是展示，不用响应改变就可用</p>
      <p> 路由懒加载  Dialog可用？() => import('./dialog')</p>
      <p> .runtime 运行时 尽量用单文件 .vue方式</p>
      <p> 数据持久化 合理使用本地缓存（减少写入读取）</p>
      <p> UI动态加载、图片懒加载、滚动可视区域动态加载数据</p>
      <p> 骨架屏 - 加载完成前显示一个 完成后显示当前页面</p>
      <p> 优化加载用cdn 加载比如：vue vuex vue-router js文件;
        并且配置忽略打包 externals: { 'vue'; 'Vue'、'vue-router':'VueRouter'、 'vuex'; 'Vuex',}</p>
      <p>加快打包速度用 happyPack</p>
      <p> splitChunks 抽离公共文件</p>
      <p> sourceMap配置 </p>
      <p> 服务端缓存，客户端缓存</p>
      <p> 服务端gzip压缩</p>
    </div>
</template>

<script>
export default {
  name: 'speed',
};

</script>

<style scoped>

</style>
