<template>
  <div>
    <label for="default-input" class="block mb-2 text-md font-medium text-white dark:text-white">
      {{ props.title }}</label>
    <input type="number" id="default-input" v-model="inputValue"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30 p-2.5" />
  </div>
</template>
<script setup lang="ts">
import { ref, watchEffect } from 'vue';


const props = defineProps({
  title: String,
});

const inputValue = ref(0);


watchEffect(() => {
  console.log(props.title + ":", inputValue.value);
});


</script>