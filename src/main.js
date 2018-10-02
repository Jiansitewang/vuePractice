//
// Vue.config.productionTip = false
//
// new Vue({
//   render: h => h(App)
// }).$mount('#app')
import 'todomvc-app-css/index.css'
import Vue from 'vue'

let filters = {
  all(todos){
    return todos
  },
  active(todos){
    return todos.filter((todo)=>{
      return !todo.completed
    })
  },
  completed(todos){
    return todos.filter((todo)=>{
      return todo.completed
    })
  }
}

new Vue({
  el:'.todoapp',
  data:{
    msg:'',
    todos:[
      {
      content:null,
      completed:false
    }],
  },
  computed:{
    remain(){
      return filters.active(this.todos).length
    }
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
