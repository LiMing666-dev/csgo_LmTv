<script setup lang="ts">
import { getCurrentWindow } from "@tauri-apps/api/window";

const startDrag = async () => {

    console.log("startDrag");
    await getCurrentWindow().startDragging();
};
</script>

<template>
    <div class="AppBar" @mousedown="startDrag">
        <div class="d-flex">
            <div class="AppBarLogo"></div>
            <div>
                <div class="AppBarOperation ">
                    <v-btn variant="text" density="compact" icon="mdi-chevron-left" color="#9197A0"></v-btn>
                    <v-btn variant="text" density="compact" icon="mdi-chevron-right" color="#9197A0"></v-btn>
                </div>
            </div>
        </div>

        <div class="mr-2">
            <div class="AppBarOperation">
                <v-btn variant="text" density="compact" icon="mdi-minus" color="#9197A0"></v-btn>
                <v-btn variant="text" density="compact" icon="mdi-close" color="#9197A0"></v-btn>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.AppBar {
    cursor: move;
    height: 40px;
    background-color: #222C3E;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .AppBarLogo {
        width: 50px;
    }
}
</style>