<script setup lang="ts">
import { ref } from "vue";
import { SidebarProps } from "../props/sidebar";
import { useRouter } from "vue-router";

const router = useRouter();

const sidebarItems: SidebarProps[] = [
  {
    title: "首页",
    icon: "mdi-home",
    url: "/",
  },
  {
    title: "Dome",
    icon: "mdi-video",
    url: "/demo",
  },
  {
    title: "视频",
    icon: "mdi-movie-open-settings",
    url: "/video",
  },
];

const sidebarItemsB: SidebarProps[] = [
  {
    title: "设置",
    icon: "mdi-cog",
    url: "/setting",
  },
];

const sidebarActive = ref<string>("/");

const handleSidebarClick = (url: string) => {
  sidebarActive.value = url;
  router.push(url);
};
</script>



<template>
  <div class="sidebarBox">
    <div class="sidebarList">
      <div
        class="sidebarItem"
        :class="{ sidebarItemActive: sidebarActive === item.url }"
        v-for="(item, index) in sidebarItems"
        :key="index"
        @click="handleSidebarClick(item.url)"
      >
        <v-tooltip :text="item.title">
          <template v-slot:activator="{ props }">
            <div v-bind="props">
              <v-icon color="white">{{ item.icon }}</v-icon>
            </div>
          </template>
        </v-tooltip>
      </div>
    </div>

    <div class="sidebarList">
      <div
        class="sidebarItem"
        :class="{ sidebarItemActive: sidebarActive === item.url }"
        v-for="(item, index) in sidebarItemsB"
        :key="index"
        @click="handleSidebarClick(item.url)"
      >
        <v-tooltip :text="item.title">
          <template v-slot:activator="{ props }">
            <div v-bind="props">
              <v-icon color="white">{{ item.icon }}</v-icon>
            </div>
          </template>
        </v-tooltip>
      </div>

      <div
        class="sidebarItem"
        :class="{ sidebarItemActive: sidebarActive === 'user' }"
        @click="handleSidebarClick('user')"
      >
        <v-tooltip text="LiMing">
          <template v-slot:activator="{ props }">
            <div v-bind="props">
              <v-avatar
                image="https://cdn.vuetifyjs.com/docs/images/one/snips/avatars/6.jpg"
                size="default"
              ></v-avatar>
            </div>
          </template>
        </v-tooltip>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.sidebarBox {
  width: 50px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .sidebarList {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .sidebarItem {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      height: 45px;
      border-radius: 10px;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        background-color: #1f3552;
      }
    }

    .sidebarItemActive {
      background-color: #1f3552;
    }
  }
}
</style>