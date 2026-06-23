<script setup lang="ts">
import { computed, ref } from "vue";

interface VideoItem {
  id: number;
  title: string;
  duration: string;
  channel: string;
  views: string;
  thumbnail: string;
  description: string;
  empty?: boolean;
}

const videos = ref<VideoItem[]>([
  {
    id: 1,
    title: "CS:GO 高光集锦 1",
    duration: "12:34",
    channel: "LmTv",
    views: "12.3 万次",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    description: "经典比赛片段与精彩击杀合集。",
  },
  {
    id: 2,
    title: "CS:GO 战术解析",
    duration: "08:20",
    channel: "LmTv",
    views: "8.9 万次",
    thumbnail: "https://images.unsplash.com/photo-1541447275515-1b267a60ef3e?auto=format&fit=crop&w=900&q=80",
    description: "讲解热门地图中的关键战术。",
  },
  {
    id: 3,
    title: "反恐精英 快速提升指南",
    duration: "10:05",
    channel: "LmTv",
    views: "5.2 万次",
    thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    description: "新手必看的操作和战术训练。",
  },
]);

const maxSlots = 8;

const slots = computed(() => {
  const list = videos.value.map((video) => ({ ...video, empty: false }));
  while (list.length < maxSlots) {
    list.push({
      id: 1000 + list.length,
      title: "",
      duration: "",
      channel: "",
      views: "",
      thumbnail: "",
      description: "",
      empty: true,
    });
  }
  return list;
});

const playVideo = (video: VideoItem) => {
  if (video.empty) {
    return;
  }
  console.log("播放视频：", video.title);
};
</script>

<template>
  <div class="VideoPage">
    <div class="VideoHeader">
      <div>
        <div class="VideoTitle">视频列表</div>
        <div class="VideoSubtitle">一行 4 个视频，支持空位展示，鼠标移入显示播放按钮。</div>
      </div>
    </div>

    <div class="VideoGrid">
      <div
        v-for="slot in slots"
        :key="slot.id"
        class="VideoCard"
        :class="{ empty: slot.empty }"
        @click="playVideo(slot)"
      >
        <div class="VideoThumbWrapper">
          <div
            class="VideoThumb"
            :style="slot.empty ? {} : { backgroundImage: `url(${slot.thumbnail})` }"
          ></div>
          <div class="VideoOverlay" v-if="!slot.empty">
            <div class="PlayButton">
              <span>▶</span>
            </div>
          </div>
        </div>
        <div class="VideoCardInfo">
          <div class="VideoCardTitle">{{ slot.empty ? "暂无视频" : slot.title }}</div>
          <div class="VideoCardMeta">{{ slot.empty ? "敬请期待" : `${slot.channel} · ${slot.views}` }}</div>
          <div class="VideoCardDesc">{{ slot.empty ? "该位置暂无内容，可显示空白占位。" : slot.description }}</div>
          <div class="VideoDuration" v-if="!slot.empty">{{ slot.duration }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.VideoPage {
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: #ffffff;
}

.VideoHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
}

.VideoTitle {
  font-size: 24px;
  font-weight: 700;
}

.VideoSubtitle {
  margin-top: 8px;
  color: #9aa8c3;
  font-size: 14px;
}

.VideoGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.VideoCard {
  background: #121a25;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.VideoCard:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.14);
}

.VideoCard.empty {
  background: rgba(255, 255, 255, 0.03);
  border-style: dashed;
  cursor: default;
}

.VideoThumbWrapper {
  position: relative;
  overflow: hidden;
}

.VideoThumb {
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #1e2b3d;
  background-size: cover;
  background-position: center;
  transition: transform 0.22s ease;
}

.VideoCard:hover .VideoThumb {
  transform: scale(1.05);
}

.VideoOverlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.18);
}

.PlayButton {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
  transition: transform 0.22s ease, background 0.22s ease;
}

.VideoCard:hover .PlayButton {
  transform: scale(1.2);
  background: rgba(255, 255, 255, 0.18);
}

.PlayButton span {
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
}

.VideoCardInfo {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.VideoCardTitle {
  font-size: 15px;
  font-weight: 600;
  line-height: 1.3;
}

.VideoCardMeta {
  font-size: 12px;
  color: #8ea3be;
}

.VideoCardDesc {
  font-size: 13px;
  color: #c2cad7;
  min-height: 40px;
}

.VideoDuration {
  font-size: 12px;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
  padding: 4px 10px;
  border-radius: 999px;
  width: fit-content;
}

</style>