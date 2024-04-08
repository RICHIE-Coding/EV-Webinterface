<template>
  <div>
    <div class="flex items-center mb-4">
      <input :id="props.title" type="checkbox" v-model="isChecked"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
      <label for=" default-checkbox" class="ms-2 text-md font-medium text-white">{{ props.title }}</label>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";
const props = defineProps({
  title: String,
});

const isChecked = ref(false);

watchEffect(() => {
  console.log(props.title + ":", isChecked.value);
});

</script>
