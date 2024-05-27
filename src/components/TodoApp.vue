<template>
    <div class="padding Center">
        <div class="w-full max-w-md btn-center">
      <h1 class="text-3xl font-bold mb-4">Todo App</h1>
      <input type="text" v-model="newTask" @keyup.enter="addTask" placeholder="Enter a new Item" class="w-full border p-2 rounded mb-4">
      <button @click="addTask" class="bg-blue-500 text-white px-4 py-2 rounded">Add Item</button>
      <ul id="list-container">    
            <li v-for="(task, index) in tasks" :key="index" class="flex items-center justify-between border-b py-2">
          <span>{{ task }}</span>
          <button @click="removeTask(index)" class="text-red-500">❌</button>
        </li>
      </ul>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTask: '',
        tasks: []
      };
    },
    mounted() {
      this.retrieveTasks();
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== '') {
          this.tasks.push(this.newTask.trim());
          this.saveTasks();
          this.newTask = '';
        }
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
        this.saveTasks();
      },
      saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      },
      retrieveTasks() {
        const storedTasks = localStorage.getItem('tasks');
        this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
      }
    }
  };
  </script>
  