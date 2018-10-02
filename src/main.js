
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
    editedTodo: null
  },
  computed:{
    remain(){
      return filters.active(this.todos).length
    },
    isAll:{
      get(){
        return this.remain === 0
      },
      set(value){
        this.todos.forEach((todo)=>{
          todo.completed = value
        })
      }
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
    },
    editTodo(todo){
      this.editedTodo = todo
    },
  },
  directives:{
    focus(el,value){
      if(value){
        el.focus()
      }
    }
  }

})

// new Vue({
//   el:".todoapp"
//
// })
