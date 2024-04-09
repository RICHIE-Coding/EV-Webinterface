<template>
  <div>
    <div class="text-center text-white text-4xl my-4">AC-Messagesequence</div>
    <div class="text-white" v-for="(message, index) in messages" :key="index">
      <div :class="getMessageColorClass(message.state)" class="text-white text-center mb-3 p-3 w-3/5 mx-auto">
        {{ message.name.value }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { Message, MessageState, MessageTypeISO2, MessageTypeISO20 } from '../../models/ISO15118Messages';

const props = defineProps<{
  messagetype: MessageTypeISO2 | MessageTypeISO20;
}>()
const messagesMap = new Map<string, Message>();

for (const [key, value] of Object.entries(props.messagetype)) {
  const message: Message = {
    name: { key, value },
    state: MessageState.UNKNOWN,
  };
  messagesMap.set(key, message);
}


const messages = ref<Message[]>(Array.from(messagesMap.values()));
watchEffect(() => {
  messages.value = Array.from(messagesMap.values());
});

const getMessageColorClass = (state: MessageState): string => {
  const colorMap: Record<MessageState, string> = {
    [MessageState.SUCCESS]: 'bg-green-700',
    [MessageState.PROGRESS]: 'bg-yellow-400',
    [MessageState.FAILED]: 'bg-red-700',
    [MessageState.UNKNOWN]: 'bg-slate-600',
  };

  return colorMap[state];
};
</script>
