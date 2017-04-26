<template lang="html">
  <div class="app">
    <p class="todo-title">Things I Need To Do...</p>
    <div class="section">
      <div class="container">
        <div class="todo-container">
          <p class="todo-header">New Task</p>
          <form action="" class="todo-form">
            <div class="new-todo">
              <input class="todo-item" type="text" placeholder="Do This">
              <div class="todo-details">
                <input class="todo-details__item" type="time">
                <input class="todo-details__item" type="date">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
