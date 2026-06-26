<script setup lang="ts">
import { ref } from "vue";

interface DemoItem {
  id: number;
  name: string;
  source: string;
  bound: boolean;
  checked: boolean;
}

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
const demos = ref<DemoItem[]>([
  { id: 1, name: "示例 Demo A", source: "本地", bound: true, checked: false },
  { id: 2, name: "示例 Demo B", source: "远程", bound: false, checked: false },
  { id: 3, name: "示例 Demo C", source: "导入", bound: false, checked: false },
  { id: 4, name: "示例 Demo D", source: "本地", bound: true, checked: false },
  { id: 5, name: "示例 Demo E", source: "远程", bound: false, checked: false },
]);

const openDemo = (item: DemoItem) => {
  console.log("打开 demo:", item.name);
};

const editDemo = (item: DemoItem) => {
  console.log("编辑 demo:", item.name);
};

const deleteDemo = (item: DemoItem) => {
  const idx = demos.value.findIndex((d) => d.id === item.id);
  if (idx !== -1) demos.value.splice(idx, 1);
};

const toggleBind = (item: DemoItem) => {
  item.bound = !item.bound;
};

const toggleCheck = (item: DemoItem) => {
  item.checked = !item.checked;
};
</script>

<template>
  <div class="DemoPage">
    <div class="DemoHeader">
      <div class="DemoTitle">Demo 列表（卡片选择）</div>
    </div>

    <!-- Card grid: 每行 3 个 -->
    <div class="CardGrid">
      <div v-for="item in folders" :key="item.title" class="DemoCard">
        <div class="CardTop">
          <v-checkbox hide-details dense></v-checkbox>
          <div class="CardTitle">{{ item.name }}</div>
        </div>
      </div>
    </div>

    <!-- 原表格保留在下方 -->
    <v-card flat>
      <v-table fixed-header height="320px" style="color: white">
        <thead>
          <tr>
            <th style="background: #222c3e" class="text-left">Demo 名称</th>
            <th style="background: #222c3e" class="text-left">来源</th>
            <th style="background: #222c3e" class="text-left">操作</th>
          </tr>
        </thead>

        <tbody style="background: #222c3e">
          <tr v-for="item in demos" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.source }}</td>
            <td>
              <v-btn size="small" @click="openDemo(item)">打开</v-btn>
              <v-btn size="small" class="ml-2" @click="editDemo(item)"
                >编辑</v-btn
              >
              <v-btn
                size="small"
                class="ml-2"
                color="error"
                @click="deleteDemo(item)"
                >删除</v-btn
              >
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.DemoPage {
  color: white;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.DemoHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.DemoTitle {
  font-size: 20px;
  font-weight: 600;
}

/* Card grid */
.CardGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.DemoCard {
  background: #121a25;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
}

.CardTop {
  display: flex;
  align-items: center;
  gap: 8px;
}

.CardTitle {
  font-size: 14px;
  font-weight: 600;
}

.CardBottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.CardActions {
  display: flex;
  gap: 8px;
}

.SelectCell {
  display: flex;
  align-items: center;
  gap: 8px;
}

.SelectInfo {
  display: flex;
  flex-direction: column;
}

.SelectTitle {
  font-size: 13px;
  font-weight: 600;
}

/* 表格内按钮稍微靠右 */
tbody tr td:last-child {
  display: flex;
  gap: 8px;
}
</style>