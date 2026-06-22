<script setup lang="ts">
import { getCurrentWindow } from "@tauri-apps/api/window";

const startDrag = async () => {

    console.log("startDrag");
    await getCurrentWindow().startDragging();
};
</script>

<template>
    <div class="AppBar" @mousedown="startDrag">232131</div>
</template>



<style lang="scss" scoped>
.AppBar {
    cursor: move;
    height: 40px;
    background-color: #222C3E;
}
</style>