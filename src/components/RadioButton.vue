<template>
  <div>
    <div class="flex items-center mb-4 gap-8">
      <div>
        <input id="default-radio-1" type="radio" value="" name="default-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
        <label for="default-radio-1" class="ms-2 text-md font-medium text-white">{{ props.title1 }}</label>
      </div>
      <div>
        <input checked id="default-radio-2" type="radio" value="" name="default-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
        <label for="default-radio-2" class="ms-2 text-md font-medium text-white">{{ props.title2 }}</label>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const props = defineProps({
  title1: String,
  title2: String,
});

</script>