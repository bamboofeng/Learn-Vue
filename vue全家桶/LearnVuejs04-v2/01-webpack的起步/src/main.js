const { sum, mul } = require('./mathUtis.js')

console.log(sum(20, 30));
console.log(mul(20, 30));

// 依赖css文件
require('./css/normal.css')


// 依赖less文件
require('./css/special.less')
document.writeln('<h2>你好呀，李银河！</h2>')

// 使用Vue进行开发
import Vue from 'vue'
// import App from './vue/app'
import App from './vue/app.vue'


new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})