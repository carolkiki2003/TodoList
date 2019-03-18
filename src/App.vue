<template>
  <div id="app">
    <h1>TO DO LIST</h1>
    <div id="nav">
      <router-link class=" router" to="/all">全部</router-link> |
      <router-link class=" router" to="/complete">已完成</router-link> |
      <router-link class=" router" to="/undone">未完成</router-link>
    </div>
    <TodoInput/>
    <div id="list">
      <TodoListItem v-for="index in todoIndex" :key="index" :index="index"/>
    </div>
  </div>
</template>
<script>
import TodoInput from '@/components/TodoInput/index.vue'
import TodoListItem from '@/components/TodoListItem/index.vue'
export default {
  components:{
    TodoInput,
    TodoListItem
  },
  computed:{
    todoIndex(){
      return this.$store.getters['todoIndex']
    }
  },
  mounted(){
    this.$store.dispatch('INIT_TODOS')
  }
}
</script>


<style >
html{
  background: #dd6f6f;
  font-family: '微軟正黑體';
}
#app{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
h1{
  color: white;
}
#nav{
  font-size: 20px;
  color: white;
}
.router{
  font-size: 20px;
  color: white;
  font-weight:400;
  padding: 10px;
}
.router:hover{
  font-size: 20px;
  color:gray;
  font-weight:400;
}
#list{
  list-style: none;
  padding: 0;
}
</style>
