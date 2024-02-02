<template>
  <Disclosure as="header" class="bg-gray-800">
    <div
      class="mx-auto max-w-7xl px-2 sm:px-4 divide-y divide-gray-700 lg:px-8"
    >
      <div class="flex h-16 justify-center">
        <div class="relative z-10 flex justify-center px-2 lg:px-0">
          <div class="flex justify-center items-center">
            <img
              class="block h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <div class="flex items-center text-3xl text-center text-white">
            EV-Simulator
          </div>
        </div>
      </div>
      <nav class="flex justify-center space-x-8 py-2" aria-label="Global">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-yellow-400 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'inline-flex items-center rounded-md py-2 px-3 text-sm font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</a
        >
      </nav>
    </div>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure } from "@headlessui/vue";

const navigation = [
  { name: "ISO 15118-2", href: "#", current: true },
  { name: "ISO 15118-20", href: "#", current: false },
];
</script>
