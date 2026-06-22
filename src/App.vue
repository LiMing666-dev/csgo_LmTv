<script setup lang="ts">
import { onMounted, ref } from "vue";
import { invoke } from "@tauri-apps/api/core";


const greetMsg = ref("");
const name = ref("");

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsg.value = await invoke("greet", { name: name.value });
}

onMounted(async () => {
  await invoke("create_data_dir");
});
</script>

<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<style scoped></style>