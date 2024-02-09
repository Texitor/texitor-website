<script setup lang="ts">
import { ref, onMounted } from "vue";

const appVersion = "0.0.3";
const platform = ref();

onMounted(() => {
  platform.value = navigator.userAgent.includes("Mac OS X")
    ? "macOS"
    : navigator.userAgent.includes("Windows")
    ? "Windows"
    : "Linux";
});

const getDownloadUrl = () => {
  if (platform.value === "macOS") {
    return `https://github.com/ali-shahwali/texitor-releases/releases/download/v${appVersion}/Texitor_${appVersion}_x64.dmg`;
  } else if (platform.value === "Windows") {
    return `https://github.com/ali-shahwali/texitor-releases/releases/download/v${appVersion}/Texitor_${appVersion}_x64-setup.exe`;
  } else if (platform.value === "Linux") {
    return `https://github.com/ali-shahwali/texitor-releases/releases/download/v${appVersion}/texitor_${appVersion}_amd64.deb`;
  }
};
</script>

<template>
  <div class="border-b">
    <UContainer class="flex flex-col items-center">
      <h1 class="text-5xl font-bold mt-16 mb-8">Own your papers.</h1>
      <p>
        Texitor is a free and modern LaTeX editor for Windows, macOS and Linux.
      </p>
      <UButton
        v-if="platform"
        class="mt-8 rounded-full"
        size="xl"
        color="black"
        :to="getDownloadUrl()"
        download
      >
        Download ({{ platform }})</UButton
      >
      <small class="mb-20 mt-2 text-gray-500">v{{ appVersion }}</small>
      <div>
        <img src="/hero.png" />
      </div>
    </UContainer>
  </div>
</template>
