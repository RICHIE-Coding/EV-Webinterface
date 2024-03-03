<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 px-4 gap-12 mt-12">
    <div class="box p-5 col-span-12 lg:col-span-6">
      <div class="grid grid-cols-2">
        <div class="flex gap-2 flex-col">
          <slot name="buttons"></slot>
        </div>
        <div class="flex gap-2 flex-col">
          <slot name="settings"></slot>
        </div>
      </div>
    </div>

    <div class="box col-span-12  lg:col-span-6">
      <slot name="info"></slot>
    </div>

    <div class="box col-span-12 lg:col-start-7 lg:col-end-13">
      <slot name="messagesequence"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.box {
  border-radius: 7px;
  box-shadow: 0 0 10px 7px #89d8f0;
}
</style>
