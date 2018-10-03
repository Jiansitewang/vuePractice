
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

let app = new Vue({
  el:'.todoapp',
  data:{
    msg:'',
    todos:[],
    editedTodo: null,
    filterName: 'all'
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
    },
    filteredTodos(){
      return filters[this.filterName](this.todos)
    }
  },
  methods:{
    addTodo(){
      if(!this.msg){
        return
      }
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
      this.editCache = todo.content
      this.editedTodo = todo
    },
    doneEdit(todo,index){
      this.editedTodo = null
      if(!todo.content){
      this.removeTodo(index)
      }
    },
    cancelEdit(todo){
      this.editedTodo = null
      todo.content = this.editCache
    },
    clear(){
     this.todos = filters.active(this.todos)
    }
  },
  directives:{
    focus(el,value){
      if(value){
        el.focus()
      }
    }
  }

})

function hashChange(){
  let xxx = location.hash.replace(/#\/?/,'')
  if(filters[xxx]){
    app.filterName = xxx
  }else{
    location.hash = ''
    app.filterName = 'all'
  }
}
window.addEventListener('hashchange',hashChange)
