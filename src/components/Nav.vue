<template>
  <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="./ToDoForm">Add To Do</router-link>
      <router-link to="./About">About</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav{
    background-color:#222629;
   padding: 0.6rem 0 0.6rem;
}
a{
    color: #86c238;
    font-size: 1.5rem;
    margin: 0 1rem;
     text-decoration: none;
     transition: 0.3s;
}
a:hover {
    color: #61892f;
}
</style>