<template>
  <div class="text-center text-white text-4xl my-4">AC-Messagesequence</div>
  <div class="text-white" v-for="message in messages" :key="message.name">
    <div :class="getMessageColorClass(message.state)" class="text-white text-center mb-3 p-3 w-1/2 mx-auto">
      {{ message.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Message, MessageState, MessageNameISO2 } from '../../models/MessageState';

const messages = ref<Message[]>([
  { name: MessageNameISO2.SLAC, state: MessageState.UNKNOWN },
  { name: MessageNameISO2.SDP, state: MessageState.UNKNOWN },
  { name: MessageNameISO2.SUPPORTED_APP_PROTOCOL, state: MessageState.UNKNOWN },
  { name: MessageNameISO2.SESSION_SETUP, state: MessageState.UNKNOWN },
  { name: MessageNameISO2.SERVICE_DISCOVERY, state: MessageState.UNKNOWN },
  { name: MessageNameISO2.SERVICE_DETAIL, state: MessageState.UNKNOWN },
  { name: MessageNameISO2.PAYMENT_SERVICE_SELECTION, state: MessageState.UNKNOWN },
  { name: MessageNameISO2.CERTIFICATE_INSTALLATION, state: MessageState.UNKNOWN },
  { name: MessageNameISO2.CERTIFICATE_UPDATE, state: MessageState.UNKNOWN },
  { name: MessageNameISO2.PAYMENT_DETAILS, state: MessageState.UNKNOWN },
  { name: MessageNameISO2.AUTHORISATION, state: MessageState.UNKNOWN },
  { name: MessageNameISO2.CHARGE_PARAMETER_DISCOVERY, state: MessageState.UNKNOWN },
  { name: MessageNameISO2.POWER_DELIVERY, state: MessageState.UNKNOWN },
  { name: MessageNameISO2.METERING_RECIPT, state: MessageState.UNKNOWN },
  { name: MessageNameISO2.SESSION_STOP, state: MessageState.UNKNOWN },
]);

const getMessageColorClass = (state: MessageState) => {
  switch (state) {
    case MessageState.SUCCESS:
      return 'bg-green-700';
    case MessageState.PROGRESS:
      return 'bg-yellow-700';
    case MessageState.FAILED:
      return 'bg-red-700';
    default:
      return 'bg-slate-600';
  }
};
</script>
