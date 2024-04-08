<template>
  <div>
    <button type="button" :class="'text-white w-[240px] bg-' +
      props.buttonColor +
      '-700 hover:bg-' +
      props.buttonColor +
      '-800 focus:outline-none focus:ring-4 focus:ring-' +
      props.buttonColor +
      '-300 font-medium rounded-full text-2xl px-5 py-3.5 text-center me-2 mb-2 dark:bg-' +
      props.buttonColor +
      '-600 dark:hover:bg-' +
      props.buttonColor +
      '-700 dark:focus:ring-' +
      props.buttonColor +
      '-800'
      ">
      {{ props.title }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  buttonColor: String,
});
</script>
