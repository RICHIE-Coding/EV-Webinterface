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
      <template v-slot:inputelements>
        <InputForm />
      </template>

      <template v-slot:info>
        <div>sas</div>
      </template>

      <template v-slot:messagesequence>
        <div class="text-center text-white text-4xl my-4">AC-Messagesequence</div>
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
import Grid from "../components/Grid.vue";
</script>

<style scoped></style>
