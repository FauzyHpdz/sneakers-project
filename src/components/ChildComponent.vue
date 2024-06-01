<template>
  <div class="flex justify-center">
    <input
      v-model="taskName"
      @keyup.enter="submitTask"
      placeholder="add task"
      class="flex-1 p-2 border rounded max-w-2xl"
    />
    <button @click="submitTask" class="ml-2 p-3 bg-blue-500 text-white rounded">
      <i class="bi bi-plus"></i>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const taskName = ref("");

const submitTask = () => {
  if (taskName.value.trim()) {
    submitTaskHandler(taskName.value);
    taskName.value = "";
  }
};

// Mendefinisikan prop submitTaskHandler
const { submitTaskHandler } = defineProps(["submitTaskHandler"]);
</script>
