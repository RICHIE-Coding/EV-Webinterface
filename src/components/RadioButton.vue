<template>
  <div>
    <div class="flex items-center mb-4 gap-8">
      <div>
        <input :id="props.title1" type="radio" :value="props.title1" :name="props.radioGroupName" v-model="choice"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
        <label :for="props.title1" class="ms-2 text-md font-medium text-white">{{ props.title1 }}</label>
      </div>
      <div>
        <input :id="props.title2" type="radio" :value="props.title2" :name="props.radioGroupName" v-model="choice"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
        <label :for="props.title2" class="ms-2 text-md font-medium text-white">{{ props.title2 }}</label>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";


const props = defineProps({
  title1: String,
  title2: String,
  radioGroupName: String,
});

const choice = ref(props.title1);

watchEffect(() => {
  console.log(props.title1 + " " + props.title2 + ":", choice.value);
});

</script>