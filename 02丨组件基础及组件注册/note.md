组件：解决复用问题

Vue.component('组件名称'，{组件配置})

```html
<script>
	Vue.component('todo-item',{
        props:{
            title: String,
            del: {
            type: Boolean,
            default: false,
        }
        },
        template:`
        <li>
            <span v-if="!del">{{title}}</span>
            <span v-else style="text-decoration: line-through;">{{title}}</span>
            <button v-show="!del">删除</button>
        </li>
        `,
        data:function () {
            return {}
            },
            methods: {

        },
        })
<\script>
```

template里用``存放要复用组件的模板。