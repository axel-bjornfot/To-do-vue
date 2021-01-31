<template>
  <div class="todo-list">
    <div class="todo">
      <div class="wrapper">
        <div class="ta-bort"><span @click="removeToDo" class="x">X</span></div>
        <button @click="moveDown">▼</button>
       <button @click="moveUp">▲</button>
        <p>Author: {{ todos.author }}</p>
        <h2>{{ todos.todo }}</h2>
        <p>{{ todos.time }}</p>
        <div class="done-div">
          <span @click="moveToDone" class="done">Done</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todos"],

  methods: {
    removeToDo() {
      this.$store.commit("removeToDo", this.todos);
    },
    moveToDone() {
      this.$store.commit("moveToDone", this.todos);
    },
    moveDown() {
      this.$store.commit("moveDown", this.todos);
    },
    moveUp(){
       return this.$store.commit("moveUp", this.todos);
       }
  },

};
</script>

<style scoped>

button {
  background-color: #222629;
  border: none;
  color: #86c238;
  padding: 2px 2px;
 border: solid 1px #86c238; 
  display: inline-block;

  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}
button:hover {
  background-color: #61892f;
}
p,
h2 {
  color: #86c238;
}
span {
  font-weight: bold;
  cursor: pointer;
}
.done-div {
  float: right;
  cursor: pointer;
}
.done {
  color: rgba(0, 128, 0, 0.794);
}
.ta-bort {
  float: right;
  cursor: pointer;
  color: rgba(255, 0, 0, 0.65);
}
.todo-list {
  margin: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.todo {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 600px;
  height: 250px;
  padding: 20px 20px;
  margin-bottom: 2rem;

  background-color: #222629;
  border-radius: 10px;
  box-shadow: 0 14px 28px #86c238, 0 10px 10px #86c238;
}

.wrapper {
  color: black;

  padding: 1rem;
}
</style>