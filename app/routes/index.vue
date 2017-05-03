<template lang="html">
  <div class="app">
    <p class="todo-title">Things I Need To Do...</p>
    <div class="section">
      <div class="container">
        <div class="todo-container">
          <p class="todo-header">New Task</p>
          <form @submit.prevent="submit" class="todo-form">
            <div class="new-todo">
              <input class="todo-item" type="text" placeholder="Do This" v-model="formValues.item">
              <div class="todo-details">
                <input class="todo-details__item" type="time" v-model="formValues.time">
                <input class="todo-details__item" type="date" v-model="formValues.date">
              </div>
            </div>
            <div class="buttons">
              <button class="buttons__save">Save</button>
            </div>
          </form>
        </div>

        <ul>
          <li class="todo-list" v-for="post in posts">
            <div class="task-item task">{{post.item}}</div>
            <div class="task-time task">{{post.time}}</div>
            <div class="task-date task">{{post.date}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';
import { create } from '../actions/todo';
export default {
  name: 'Index',
  data() {
    return {
      formValues: {
        item: '',
        time: '',
        date: '',
      },
      posts: this.$select('posts')
    };
  },
  methods: {
    submit() {
      store.dispatch(create(this.formValues));

      this.$router.push({ name: 'index' });
    },
  },
};
</script>
