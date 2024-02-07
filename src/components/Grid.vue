<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
    <div class="box mt-10 p-5 col-span-5">
      <div class="grid grid-cols-2">
        <div class="flex gap-2 flex-col">
          <slot name="buttons"></slot>
        </div>
        <slot name="inputelements"></slot>
      </div>
    </div>

    <div class="box mt-10 p-3 col-span-7">
      <slot name="info"></slot>
    </div>

    <div class="box col-start-6 col-end-13">
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
