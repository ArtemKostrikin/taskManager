<template>
    <div>
      <TaskList />
      <router-link to="/add">Добавить задачу</router-link>
    </div>
  </template>
  
  <script>
  import TaskList from '@/components/TaskList.vue';
  
  export default {
    name: 'HomePage',
    components: {
      TaskList
    }
  };
  </script>
  