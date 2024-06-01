<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4 text-center p-10">TASK LIST</h1>
    <!-- Meneruskan fungsi memancarkan event ke komponen TaskForm -->
    <task-form :submitTaskHandler="addTask"></task-form>
    <div class="flex justify-center mt-4">
      <ul class="w-full max-w-2xl">
        <li
          v-for="task in tasks"
          :key="task.id"
          class="bg-gray-100 rounded p-2 mb-2 shadow flex justify-between items-center"
        >
          <span>{{ task.name }}</span>
          <button
            @click="deleteTask(task.id)"
            class="ml-2 p-2 bg-red-500 text-white rounded"
          >
            <i class="bi bi-x"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TaskForm from "./ChildComponent.vue";

const tasks = ref([]);

const addTask = (newTask) => {
  tasks.value.push({
    id: tasks.value.length + 1,
    name: newTask,
  });
};

const deleteTask = (taskId) => {
  tasks.value = tasks.value.filter((task) => task.id !== taskId);
};
</script>
