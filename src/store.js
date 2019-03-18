import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 定義localstorage
const LS = {
  load(){
    return JSON.parse(localStorage.getItem('vue-todo') || '[]')
  },
  save(data){
    localStorage.setItem('vue-todo',JSON.stringify(data))
  }
}

const filter ={
  all(todos){
    return todos
  },
  complete(todos){
    return todos.filter(todo=>{
      return todo.complete
    })
    //官方範例 var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'], const result = words.filter(word => word.length > 6)
    //todo代表裡面的每一個item
    //complete如果是true，就return todo.complete
  },
  undone(todos){
    return todos.filter(todo=>{
      return !todo.complete
    })
  }
}

export default new Vuex.Store({
  strict:true,
  state: {
    todos:[
      {content:'todo-content',complete:false},
      {content:'todo-content',complete:true},
      {content:'todo-content',complete:false}
    ]
  },
  getters:{
    todoIndex(state){
      return filter[state.route.name](state.todos).map(todo=>state.todos.indexOf(todo))
    }
  },
  mutations: {
    SET_TODOS(state,data){
      //置入 localstorage
      state.todos=data
      LS.save(state.todos)
    },
    ADD_TODO(state,data){
      state.todos.push(data)
      LS.save(state.todos)
    },
    UPDATE_TODO(state,{index,data}){
      state.todos[index].complete=data.complete
      state.todos[index].content=data.content
      //{index,data}是解構，[index]=state.todos.index
      LS.save(state.todos)
    },
    REMOVE_TODO(state,index){
      state.todos.splice(index , 1)
      LS.save(state.todos)
    }
  },
  actions: {
    INIT_TODOS({ commit }){
      //讀取 localstorage
      commit('SET_TODOS',LS.load())
    }
  }
})
