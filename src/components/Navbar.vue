<template>
  <Disclosure as="header" class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-4 divide-y divide-gray-700 lg:px-8">
      <div class="flex h-16 justify-center">
        <div class="relative z-10 flex justify-center px-2 lg:px-0">
          <div class="flex items-center text-3xl text-center text-white">
            EV-Simulator
          </div>
        </div>
      </div>
      <nav class="flex justify-center space-x-8 py-2" aria-label="Global">
        <router-link to="/"
          :class="{ 'bg-yellow-400 text-white': $route.path === '/', 'text-gray-300 hover:bg-gray-700 hover:text-white': $route.path !== '/' }"
          class="inline-flex items-center rounded-md py-2 px-3 text-sm font-medium">ISO 15118-2</router-link>
        <router-link to="/ISO20"
          :class="{ 'bg-yellow-400 text-white': $route.path === '/ISO20', 'text-gray-300 hover:bg-gray-700 hover:text-white': $route.path !== '/ISO20' }"
          class="inline-flex items-center rounded-md py-2 px-3 text-sm font-medium">ISO 15118-20</router-link>
      </nav>
    </div>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure } from "@headlessui/vue";




</script>
