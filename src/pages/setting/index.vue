<script setup lang="ts">
import { ref } from "vue";

const desserts = [
  {
    name: "Frozen Yogurt",
    calories: 159,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
  },
  {
    name: "Eclair",
    calories: 262,
  },
  {
    name: "Cupcake",
    calories: 305,
  },
];

const folders = [
  {
    title: "完美平台",
    img: "https://pvp.wanmei.com/pvpfavicon.ico",
  },
  {
    title: "5E平台",
    img: "https://static.5eplay.com/images/favicon.ico",
  },
  {
    title: "官匹平台",
    img: "https://store.steampowered.com/favicon.ico",
  },
];

const tab = ref<string>("one");
</script>

<template>
  <div style="color: white">
    <v-tabs v-model="tab" color="primary">
      <v-tab value="one">Dome设置</v-tab>
      <v-tab value="two">游戏设置</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab" class="mt-4">
      <v-tabs-window-item value="one">
        <div>
          <div
            class=""
            style="font-size: 14px; font-weight: bold; margin-bottom: 10px"
          >
            绑定平台
          </div>
        </div>
        <v-card flat>
          <v-list
            bg-color="#222C3E"
            density="compact"
            color="surface-variant"
            nav
            :lines="false"
          >
            <v-list-item
              v-for="folder in folders"
              :key="folder.title"
              :title="folder.title"
              :value="folder.title"
              color="surface-variant"
            >
              <template v-slot:prepend>
                <v-avatar size="20">
                  <v-img size="20" :src="folder.img"></v-img>
                </v-avatar>
              </template>

              <template v-slot:append>
                <v-btn
                  color="green"
                  icon="mdi-check-circle"
                  size="small"
                  variant="text"
                ></v-btn>
              </template>
            </v-list-item>
          </v-list>
        </v-card>

        <div
          class="mt-4"
          style="font-size: 14px; font-weight: bold; margin-bottom: 10px"
        >
          Dome回放设置
        </div>
        <div class="" style="font-size: 12px">
          回放设置每次修改之后都需要退出游戏重新进入
        </div>
        <div class="mt-4">
          <div
            class=""
            style="font-size: 14px; font-weight: bold; margin-bottom: 10px"
          >
            绑定5E
          </div>
          <div class="" style="font-size: 12px">
            自动检测5E安装路径，如果检测不到请手动调试路径
          </div>
          <v-btn size="small" class="mt-4">扫描路径</v-btn>
          <div class="mt-4">
            <v-text-field
              hide-details="auto"
              variant="outlined"
              density="compact"
              disabled
            ></v-text-field>
          </div>
        </div>

        <div>
          <div></div>
        </div>
      </v-tabs-window-item>
      <v-tabs-window-item value="two">
        <div>
          <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px">
            CFG云备份
          </div>
          <div style="font-size: 12px">
            使用不同机器进行游戏时，可通过上传/下载CFG来保持游戏设置相同，下载后需重启CS后才会生效
          </div>

          <div class="mt-4">
            <v-btn size="small">上传备份</v-btn>
          </div>

          <div class="CfgTable mt-4">
            <v-table height="200px" style="color: white" fixed-header>
              <thead>
                <tr>
                  <th style="background: #222c3e" class="text-left">Cdg名称</th>
                  <th style="background: #222c3e" class="text-left">操作</th>
                </tr>
              </thead>
              <tbody style="background: #222c3e">
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>
                    <v-btn size="small">完美</v-btn>
                    <v-btn size="small" class="ml-2">5E</v-btn>
                    <v-btn size="small" class="ml-2" color="error">删除</v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>

          <div
            class="mt-4"
            style="font-size: 14px; font-weight: bold; margin-bottom: 10px"
          >
            准星代码备份
          </div>
          <div style="font-size: 12px">
            使用不同机器进行游戏时，可通过上传/下载CFG来保持游戏设置相同，下载后需重启CS后才会生效
          </div>
        </div>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<style lang="scss" scoped></style>