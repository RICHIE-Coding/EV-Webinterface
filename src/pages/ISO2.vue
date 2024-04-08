<template>
  <div class="container">
    <Grid>
      <template v-slot:buttons>
        <Button title="Plug-In" buttonColor="green" />
        <Button title="Stop-Charging" buttonColor="red" />
        <Button title="Pause-Charging" buttonColor="purple" />
        <Button title="Resume-Charging" buttonColor="yellow" />
        <Button title="Renegotiation" buttonColor="blue" />
        <Button title="Unplug-Car" buttonColor="gray" />
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
import Button from "../components/Button.vue"
import InputForm from "../components/InputForm.vue";
import TCPTLSSelection from "../components/RadioButtons/TCPTLSSelection.vue"
import ISO15118BasicChargingSelection from "../components/RadioButtons/ISO15118BasicChargingSelection.vue"
import ChargingWithoutContract from "../components/Checkbox/ChargingWithoutContract.vue"
import SetPauseState from "../components/Checkbox/SetPauseState.vue"
import Grid from "../components/Grid.vue";
import ISO2MessageSequence from "../components/MessageSequences/ISO2Messagesequence.vue"
</script>

<style scoped></style>
