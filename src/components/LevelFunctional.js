export default {
  props: {
    t: {},
  },
  render(h) { // createElement
    // html 以< 开头 {
    const tag = `h${this.t}`;
    return h(tag, { style: { display: 'inline', marginRight: '20px' } }, this.$slots.default);

    // h1 on-click={()=>{alert(1)}} style={{color:'red'}}>你好</h1>
    // h('h1',{
    //     on:{
    //         click(){
    //             alert(1)
    //         },
    //     },
    //     attrs:{
    //         a:1
    //     }
    // },[h('span',{},'你好')])
  },
};
