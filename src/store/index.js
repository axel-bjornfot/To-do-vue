import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        author: "Morpheus",
        todo: "Find The One",
        time: "Date Wed Jul 14 1999 10:20:38 GMT+0100 (centraleuropeisk normaltid)"
      },
      {
        author: "Morpheus",
        todo: "Teatch The One",
        time: "Date Wed Jul 14 1999 10:20:38 GMT+0100 (centraleuropeisk normaltid)"
      },
      {
        author: "Morpheus",
        todo: "Kick Agent Smith's ass",
        time: "Date Wed Jul 14 1999 13:20:38 GMT+0100 (centraleuropeisk normaltid)"
      }, {
        author: "Morpheus",
        todo: "Köpa kaffefilter",
        time: "Date Wed Jul 14 1999 14:20:38 GMT+0100 (centraleuropeisk normaltid)"
      },

    ],
    doneTodos: [
    
    ],
  },
  mutations: {
    addToDo(state, newtodo) {

      state.todos.unshift(newtodo);
      console.log(state.todos);
    },
    moveDown(state, thisIndex) {

      state.ind = state.todos.indexOf(thisIndex);
      state.indtomove = state.ind + 2;
      state.todos.splice(state.indtomove, 0, thisIndex);
      state.todos.splice(state.ind, 1);
    },
    moveUp(state, thisIndex) {

      state.in = state.todos.indexOf(thisIndex);
      state.indtomove = state.in - 1;
      state.in = state.in + 1;
      if(state.todos.indexOf(thisIndex) !== 0){
      state.todos.splice(state.indtomove, 0, thisIndex);
      state.todos.splice(state.in, 1);}
    },

    moveToDone(state, toDoToMove) {
      state.doneTodos.unshift(toDoToMove);
      state.todos = state.todos.filter((todo) => toDoToMove !== todo);

    },
    removeToDo(state, toDoToRemove) {
      state.todos = state.todos.filter((todo) => toDoToRemove !== todo);
    },
  }
})

