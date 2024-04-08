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
        <RadioButton title1="TCP" title2="TLS" />
        <RadioButton title1="ISO 15118" title2="Basic Charging" />
        <SetPauseState />
        <ChargingWithoutContract />
        <InputForm />
      </template>

      <template v-slot:info>
        <div class="text-white text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa omnis
          tempora quis perspiciatis ducimus corporis officia? Dolorum iusto
          error porro necessitatibus, voluptatum pariatur quaerat, sapiente
          impedit odio unde molestias est.
        </div>
      </template>

      <template v-slot:messagesequence>
        <ISO2MessageSequence />
      </template>
    </Grid>
  </div>
</template>

<script setup lang="ts">
import RadioButton from "../components/RadioButton.vue"
import Button from "../components/Button.vue";
import InputForm from "../components/InputForm.vue";
import ChargingWithoutContract from "../components/Checkbox/ChargingWithoutContract.vue";
import SetPauseState from "../components/Checkbox/SetPauseState.vue";
import Grid from "../components/Grid.vue";
import ISO2MessageSequence from "../components/MessageSequences/ISO2Messagesequence.vue";
</script>

<style scoped></style>
