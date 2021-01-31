<template>
  <div class="done-todo-list">
    <div class="done">
      <div class="wrapper">
        <p>Author: {{ doneTodos.author }}</p>
        <h2>{{ doneTodos.todo }}</h2>
        <p>{{ doneTodos.time }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["doneTodos"],
};
</script>

<style scoped>
.done-todo-list {
  margin: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.done {
   
  
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 600px;
  height: 200px;
  padding: 20px 20px;
  

  background-color: #222629;
  border-radius: 10px;
  box-shadow: 0 14px 28px #86c238, 0 10px 10px #86c238;


}


</style>