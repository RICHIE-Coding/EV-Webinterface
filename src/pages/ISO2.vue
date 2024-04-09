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
        <RadioButton title1="TCP" title2="TLS" radioGroupName="TCPTLS" />
        <RadioButton title1="ISO 15118" title2="Basic Charging" radioGroupName="ISOBasic" />
        <Checkbox title="Charging without Contract" />
        <Checkbox title="Set Pausestate after PlugIn" />
        <InputField title="eAmount" />
        <InputField title="evMaxVoltage" />
        <InputField title="evMaxCurrent" />
        <InputField title="evMinCurrent" />
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
        <ISO2MessageSequence :messagetype="MessageTypesISO2" />
      </template>
    </Grid>
  </div>
</template>

<script setup lang="ts">
import RadioButton from "../components/RadioButton.vue"
import Button from "../components/Button.vue";
import InputField from "../components/InputField.vue";
import Checkbox from "../components/Checkbox.vue"
import Grid from "../components/Grid.vue";
import ISO2MessageSequence from "../components/ISO2Messagesequence.vue";
import { MessageTypesISO2 } from "../models/ISO15118Messages";
</script>

<style scoped></style>
