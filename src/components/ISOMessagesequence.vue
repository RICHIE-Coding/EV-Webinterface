<template>
  <div>
    <div class="text-center text-white text-4xl my-4">AC-Messagesequence</div>
    <div class="text-white mb-3" v-for="(message, index) in messages" :key="index">
      <div :class="message.state" class="text-white text-center text-xl mb-3 p-4 w-3/5 mx-auto">
        {{ message.key.value }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import {
  Message,
  MessageState,
  MessageTypesISO2,
  MessageTypesISO20,
} from "../models/ISO15118Messages";

const props = defineProps<{
  messagetype: typeof MessageTypesISO2 | typeof MessageTypesISO20;
}>();
const messagesMap = new Map<string, Message>();

for (const [key, value] of Object.entries(props.messagetype)) {
  const message: Message = {
    key: { value },
    state: MessageState.UNKNOWN,
  };
  messagesMap.set(key, message);
}

const messages = ref<Message[]>(Array.from(messagesMap.values()));

const setMessagesState = (key: string, state: MessageState) => {
  const message = messagesMap.get(key);
  if (message) {
    message.state = state;
  }
};

setMessagesState("SESSION_SETUP", MessageState.SUCCESS);


watchEffect(() => {
  messages.value = Array.from(messagesMap.values());
});
</script>
