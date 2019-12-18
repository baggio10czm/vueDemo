<template>
    <div style="padding: 15px;">
        <h3>--------第一课--------</h3>
        <Parent></Parent>

        <h3 style="margin-top: 30px;">--------第二课--------</h3>
        <Level :t="1">h1标题</Level>
        <Level :t="2">h2标题</Level>
        <Level :t="3">h3标题</Level>
        <Level :t="4">h4标题</Level>
        <Level :t="5">h5标题</Level>
        <Level :t="5">h6标题</Level>

        <!-- 提供render  element-ui tree -->
        <List :data="['香蕉','苹果','橘子']" :render="render"></List>

        <!-- element-ui scope-slot 作用域插槽 -->

        <!-- 组件封装 -->
        <List1 :data="['香蕉','苹果','橘子']">
            <!-- 回调函数 -->
            <!-- 普通插槽是在父组件中执行 -->
            <!-- 子组件中执行的是 作用域插槽  a是插槽名字 -->
            <template v-slot:a="{item,a}">
                <p>{{item}} {{a}}</p>
            </template>
        </List1>

        <Table style="margin-top: 20px;" border :columns="columns" :data="data"></Table>
    </div>
</template>
<script>
    import Parent from './components/Parent'
    // 实现一个小组件 标题组件 Level type="6"
    // 函数式组件 没有模板 必须要有一个render函数
    import Level from './components/LevelFunctional.js';
    import List from './components/List';
    import List1 from './components/List1'

    export default {
        // 生命周期 不能是created
        mounted() {
            this.$broadcast('say')
        },
        data() {
            return {
                tag: "h3",
                currentIndex: -1,
                columns: [
                    {
                        title: 'Name',
                        key: 'name',
                        render: this.tableRender
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        methods: {
            render(h, data) { // data是函数式组件在list组件中每次循环出来的结果
                return h(this.tag, data)
            },
            tableRender(h, {row, column, index}) {
                return h("div",[h("h1", {
                    style: {
                        display: this.currentIndex === index ? "none" : "block"
                    },
                    on: {
                        click: (e) => {
                            this.currentIndex = index
                            // 渲染完之后
                            this.$nextTick(()=> {
                                // 全选 + 获取焦点...
                                e.target.parentNode.children[1].children[0].children[1].select()
                                e.target.parentNode.getElementsByTagName('input')[0].focus()
                            })
                        }
                    }
                }, row[column.key]),
                h('i-input',{
                        props: {
                            value: row[column.key],
                        },
                        style: {
                            display: this.currentIndex === index ? "block" : "none"
                        },
                        on: {
                            input: (value) => {
                                row[column.key] = value
                            },
                            "on-enter": () => {
                                this.data.splice(index,1,row)
                                this.currentIndex = -1
                            },
                            "on-blur": () => {
                                this.data.splice(index,1,row)
                                this.currentIndex = -1
                            }
                        }
                    }
                )])
            }
        },
        components: {
            Parent,
            Level,
            List,
            List1
        }
    }
</script>
<style>
    body {
        color: #000000;
    }
</style>