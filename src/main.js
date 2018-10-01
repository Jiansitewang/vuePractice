//
// Vue.config.productionTip = false
//
// new Vue({
//   render: h => h(App)
// }).$mount('#app')
import 'todomvc-app-css/index.css'
import Vue from 'vue'

new Vue({
  el:'.todoapp',
  data:{
    msg:'',
    todos:[{
      content:'',
      completed:false
    }],
  },
  methods:{
    addTodo(){
      this.todos.push({
        content:this.msg,
        completed:false
      })
      this.msg = ''
    },
    removeTodo(index){
      this.todos.splice(index,1)
    }
  }
})

// new Vue({
//   el:".todoapp"
//
// })
