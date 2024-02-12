<script setup lang="ts">
import { ref, onMounted } from "vue";

interface ReleaseResponse {
  version: string;
  notes: string;
  pub_date: string;
  platforms: {
    "darwin-x86_64"?: {
      signature: string;
      url: string;
    };
    "darwin-aarch64"?: {
      signature: string;
      url: string;
    };
    "linux-x86_64"?: {
      signature: string;
      url: string;
    };
    "windows-x86_64"?: {
      signature: string;
      url: string;
    };
  };
}

const { data: latestRelease } = useFetch<ReleaseResponse>(
  // platform and arch can be whatever
  "https://texitor-releases.fly.dev/windows/x86_64",
  {
    parseResponse(res) {
      return JSON.parse(res);
    },
  }
);

const platform = ref();

onMounted(() => {
  platform.value = navigator.userAgent.includes("Mac OS X")
    ? "macOS"
    : navigator.userAgent.includes("Windows")
    ? "Windows"
    : "Linux";
});

const getDownloadUrl = () => {
  const version = latestRelease.value?.version;
  const baseUrl = `https://github.com/Texitor/texitor-releases/releases/download/v${version}`;
  if (platform.value === "macOS") {
    return `${baseUrl}/Texitor_${version}_x64.dmg`;
  } else if (platform.value === "Windows") {
    return `${baseUrl}/Texitor_${version}_x64-setup.exe`;
  } else if (platform.value === "Linux") {
    return `${baseUrl}/texitor_${version}_amd64.AppImage`;
  }
};

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

const navigation = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "FAQ", href: "#faqs" },
  { name: "Guide", href: "https://docs.texitor.com/" },
];

const mobileMenuOpen = ref(false);

const handlePostDownload = () => {
  setTimeout(() => {
    window.location.href = "/postdownload";
  }, 1000);
};
</script>

<template>
  <div id="home" class="bg-white dark:bg-gray-900">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Texitor</span>
            <img class="h-8 w-auto" src="/logo.png" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <UIcon
              name="i-heroicons-bars-3"
              class="h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >{{ item.name }}</a
          >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <UButton
            :to="getDownloadUrl()"
            @click="handlePostDownload"
            download
            variant="link"
            color="black"
            icon="i-heroicons-cloud-arrow-down"
            >Download</UButton
          >
        </div>
      </nav>
      <USlideover v-model="mobileMenuOpen" class="lg:hidden">
        <div class="p-4 flex-1">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Texitor</span>
              <img class="h-8 w-auto" src="/logo.png" alt="" />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <UIcon
                name="i-heroicons-x-mark"
                class="h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div
              class="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/25"
            >
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                  >{{ item.name }}</a
                >
              </div>
              <div class="py-6">
                <a
                  :href="getDownloadUrl()"
                  @click="handlePostDownload"
                  Download
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                  >Download</a
                >
              </div>
            </div>
          </div>
        </div>
      </USlideover>
    </header>

    <div class="relative isolate pt-14">
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] dark:from-[#ff80b5] dark:to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
      <div class="py-24 sm:py-32 lg:pb-40">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h1
              class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
            >
              Own your papers.
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Texitor is a free and modern LaTeX editor for Windows, macOS and
              Linux.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <UButton
                v-if="platform"
                color="black"
                class="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                :to="getDownloadUrl()"
                @click="handlePostDownload"
                download
              >
                Download</UButton
              >
              <a
                href="#features"
                class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                >Learn more <span aria-hidden="true">→</span></a
              >
            </div>
            <div class="mt-4">
              <UBadge
                v-if="latestRelease"
                color="gray"
                variant="subtle"
                :ui="{ rounded: 'rounded-full' }"
                >v{{ latestRelease.version }} out now!</UBadge
              >
            </div>
          </div>
          <div class="mt-16 flow-root sm:mt-24">
            <div
              class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"
            >
              <ClientOnly>
                <img
                  :src="isDark ? '/hero-dark.png' : '/hero.png'"
                  alt="App screenshot"
                  width="2432"
                  height="1442"
                  class="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
    </div>
  </div>
</template>
