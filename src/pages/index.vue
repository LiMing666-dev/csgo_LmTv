<script setup lang="ts">
import Appbar from "../components/appbar.vue";
import Sidebar from "../components/sidebar.vue";
import router from "../router/index.ts";
</script>

<template>
  <div class="Home">
    <div class="AppBar">
      <Appbar></Appbar>
    </div>
    <div class="HomeContent">
      <div class="HomeLeft">
        <div class="HomeLeftBox">
          <Sidebar></Sidebar>
        </div>
      </div>
      <div class="HomeRight">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Home {
  width: 100%;
  background-color: #0d151e;
  display: flex;
  flex-direction: column;
  height: 100%;

  .HomeContent {
    flex: 1;
    position: relative;
    display: flex;
    // height: 100%;

    // overflow: hidden;
    .HomeLeft {
      width: 60px;
      height: 100%;
      box-sizing: border-box;

      .HomeLeftBox {
        width: 100%;
        height: 100%;
        background-color: #222c3e;
      }
    }

    .HomeRight {
      flex: 1;
      box-sizing: border-box;
      padding: 20px;
      height: calc(100vh - 40px); /* 48px是头部高度 */
      overflow-y: auto;
    }
  }
}
</style>
