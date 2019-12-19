export default {
  clickOutside: {
    // 指令挂载时
    inserted(el, bindings) {
      // console.log(el, bindings);
      // eslint-disable-next-line consistent-return
      document.addEventListener('click', (e) => {
        // 如果点击的不是本身 或者本身包含的 就执行后面的close事件
        if (e.target === el || el.contains(e.target)) {
          return false;
        }
        // close事件
        bindings.value();
      });
    },
    // 指令卸载时
    // unbind(){}
  },
};
