<template>
  <div class="home">
    <div class="logo-container">
  <img :src="logo" alt="to do logo">
</div>
     <div v-if="todos.length > 0">
      <TodoList
        v-for="(todos, i) in todos"
        :key="i"
        :todos="todos"
      />
    </div>

    <div v-if="doneTodos.length > 0">
     
       <h1>Klara to do's</h1>
      <DoneTodoList
      v-for="(doneTodos, index) in doneTodos"
        :key="index"
        :doneTodos="doneTodos"
      />
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import TodoList from '../components/TodoList'
import DoneTodoList from'../components/DoneTodoList'
import logo from '../assets/todo.png'
export default {
  name: 'Home',
  components: {
    TodoList,
    DoneTodoList,
 
  },
    data(){
    return{
    logo: logo,
    }
    },
  computed:{
    todos(){
      
      return this.$store.state.todos
    },
    doneTodos(){
      return this.$store.state.doneTodos
    },
   
  }
}
</script>
<style  scoped>
.logo-container{
margin: 2rem auto;
display: flex;
justify-content: center;
}
h1{
  
    text-align: center;
  margin: 2rem;
}
</style>