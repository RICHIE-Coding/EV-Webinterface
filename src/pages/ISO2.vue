<template>
  <div class="container">
    <Grid>
      <template v-slot:buttons>
        <PLugIn />
        <Stop />
        <PauseCharging />
        <ResumeCharging />
        <Renegotiation />
        <Unplug />
      </template>
      <template v-slot:settings>
        <TCPTLSSelection />
        <ISO15118BasicChargingSelection />
        <SetPauseState />
        <ChargingWithoutContract />
        <InputForm />
      </template>

      <template v-slot:info>
        <div class="text-white text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa omnis tempora quis
          perspiciatis ducimus corporis officia? Dolorum iusto error porro necessitatibus, voluptatum pariatur quaerat,
          sapiente impedit odio unde molestias est.</div>
      </template>

      <template v-slot:messagesequence>
        <ISO2MessageSequence />
      </template>
    </Grid>
  </div>
</template>

<script setup lang="ts">
import PLugIn from "../components/Buttons/PlugIn.vue";
import Stop from "../components/Buttons/Stop.vue";
import PauseCharging from "../components/Buttons/PauseCharging.vue";
import ResumeCharging from "../components/Buttons/ResumeCharging.vue";
import Renegotiation from "../components/Buttons/Renegotiation.vue";
import Unplug from "../components/Buttons/Unplug.vue";
import InputForm from "../components/InputForm.vue";
import TCPTLSSelection from "../components/RadioButtons/TCPTLSSelection.vue"
import ISO15118BasicChargingSelection from "../components/RadioButtons/ISO15118BasicChargingSelection.vue"
import ChargingWithoutContract from "../components/Checkbox/ChargingWithoutContract.vue"
import SetPauseState from "../components/Checkbox/SetPauseState.vue"
import Grid from "../components/Grid.vue";
import ISO2MessageSequence from "../components/MessageSequences/ISO2Messagesequence.vue"
</script>

<style scoped></style>
