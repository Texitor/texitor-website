<script setup lang="ts">
import { ref, onMounted } from "vue";

const platform = ref();

onMounted(() => {
  platform.value = navigator.userAgent.includes("Mac OS X")
    ? "macOS"
    : navigator.userAgent.includes("Windows")
    ? "Windows"
    : "Linux";
});
</script>

<template>
  <div class="bg-white min-h-screen">
    <main class="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
      <NuxtImg
        class="mx-auto"
        height="48"
        width="48"
        src="/logo.png"
        alt="Texitor Logo"
      />
      <div class="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
        <!-- <p class="text-base font-semibold leading-8 text-indigo-600">
          Success!
        </p> -->
        <h1
          class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
        >
          Thanks for downloading Texitor!
        </h1>
        <p
          class="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8"
        >
          We hope you love using it as much as we do.
        </p>
      </div>
      <div class="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
        <ClientOnly>
          <div v-if="platform === 'Windows'" class="w-full flex flex-col gap-4">
            <h2
              class="text-indigo-500 font-semibold border-b pb-3 border-dashed"
            >
              Steps for downloading on Windows:
            </h2>
            <img src="/WinStep1.png" alt="Step 1" />
            <img src="/WinStep2.png" alt="Step 2" />
            <img src="/WinStep3.png" alt="Step 3" />
          </div>
          <div
            v-else-if="platform === 'macOS'"
            class="w-full flex flex-col gap-4"
          >
            <h2
              class="text-indigo-500 font-semibold border-b pb-3 border-dashed"
            >
              Steps for downloading on MacOS:
            </h2>
            <img src="/MacStep1.png" alt="Step 1" />
            <img src="/MacStep2.png" alt="Step 2" />
          </div>
        </ClientOnly>

        <div class="mt-10 flex justify-center">
          <ULink to="/" class="text-sm font-semibold leading-6 text-indigo-600">
            <span aria-hidden="true">&larr;</span>
            Back to home
          </ULink>
        </div>
      </div>
    </main>
    <footer class="border-t border-gray-100 py-6 sm:py-10">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 sm:flex-row lg:px-8"
      >
        <p class="text-sm leading-7 text-gray-400">
          &copy; Texitor. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
