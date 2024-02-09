<script setup lang="ts">
import { ref, onMounted } from "vue";

const platform = ref();
const appVersion = "0.0.3";

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

const links = [
  {
    label: "Home",
    icon: "i-heroicons-home",
    to: "#",
  },
  {
    label: "About",
    icon: "i-heroicons-cube-transparent",
    to: "#about",
  },
  {
    label: "FAQ",
    icon: "i-heroicons-chat-bubble-left-right",
    to: "#faq",
  },
];
</script>

<template>
  <div class="border-b sticky top-0 z-50 bg-white/80 backdrop-blur">
    <UContainer class="flex justify-between items-center p-4">
      <div class="flex-1">
        <img
          src="/logo.png"
          class="h-12 w-12 shadow rounded-lg invert hover:invert-0 block transform hover:scale-110 transition-all duration-300"
        />
      </div>
      <div class="flex space-x-8 px-8 rounded-full border">
        <UHorizontalNavigation :links="links" />
      </div>
      <div class="flex-1 flex justify-end">
        <UButton
          :to="getDownloadUrl()"
          download
          variant="link"
          color="black"
          icon="i-heroicons-cloud-arrow-down"
          >Download</UButton
        >
      </div>
    </UContainer>
  </div>
</template>
