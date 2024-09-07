<template>
    <div>
        <h2>Список задач</h2>
        <ul>
            <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
        </ul>
    </div>
</template>

<script>
export default { 
  name: 'TaskList',
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  }
};
</script> e