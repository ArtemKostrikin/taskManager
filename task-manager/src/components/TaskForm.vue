<template>
    <div>
      <h2>Добавить новую задачу</h2>
      <form @submit.prevent="addTask">
        <input v-model="title" type="text" placeholder="Название задачи" required />
        <button type="submit">Добавить задачу</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        errorMessage: ''
      };
    },
    methods: {
      addTask() {
        if (this.title.trim().length === 0) {
          this.errorMessage = 'Название задачи не может быть пустым!';
          return;
        }
        this.$store.commit('addTask', this.title);
        this.title = '';
        this.errorMessage = '';
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  </style>
  