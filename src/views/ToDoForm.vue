<template>
  <div class="todo-form">
    <h1>Skapa en to do</h1>
    <div class="form-wrap">
    
    <div class="form">
      
      <form @submit.prevent="addToDo">
        <div class="author wrapper">
          <label for="author">Author: </label>
          <input id="author" v-model="author" type="text" />
        </div>
        <div class="todo wrapper">
          <label for="todo">To do:</label>
          <textarea
            v-model="todo"
            id="description"
            name="description"
            cols="30"
            rows="6"
          />
        </div>
        <div class="button wrapper">
          <button class="btn" type="submit">Add</button>
        </div>
      </form>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: "",
      todo: "",
      result: "",
      router: "",
    };
  },
  methods: {
    addToDo() {
      let d = new Date();
      let newtodo = {
        author: this.author,
        todo: this.todo,
        time: d,
      };

      this.$store.commit("addToDo", newtodo);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.todo-form {
  margin-top: 3rem;
  color:#86c238;
  text-align: center;
}
.form-wrap {
  
    margin: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
}
.form {

  display: flex;
  align-items: flex-end;
  justify-content: center;
  
  padding: 20px 30px 20px 20px;
  margin-left: 3rem;

  background-color:#222629 ;
  border-radius: 10px;
  box-shadow: 0 14px 28px #86c238, 0 10px 10px #86c238;
}

input,
label {
  margin: 0 1rem;
}
label {
  align-self: flex-start;
}
.wrapper {
  align-items: center;
  display: flex;
  margin: 1rem 0;
}
.button.wrapper {
  justify-content: flex-end;
}
button {
  margin: 0 2rem;
}
</style>