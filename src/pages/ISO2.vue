<template>
  <div class="container">
    <div class="grid grid-cols-1 lg:grid-cols-12  gap-12">
      <div class="box mt-10 p-5 col-span-5 ">
        <div class="grid grid-cols-2">
          <div class="flex gap-2 flex-col">
            <PLugIn />
            <Stop />
            <PauseCharging />
            <ResumeCharging />
            <Renegotiation />
            <Unplug />
          </div>
          <InputForm />
        </div>
      </div>
      <div class="box mt-10 p-3 col-span-7">sas</div>
      <div class="box col-start-6 col-end-13">sasas</div>
    </div>
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
</script>

<style scoped>
.box {
  border-radius: 7px;
  box-shadow: 0 0 10px 7px orange;
}
</style>
