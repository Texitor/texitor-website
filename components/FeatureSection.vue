<script setup lang="ts">
const features = [
  {
    name: "Fast compilation",
    description:
      "Built from the ground up to be fast and efficient. Texitor compiles your documents as fast as possible.",
    icon: "i-heroicons-bolt",
  },
  {
    name: "Secure documents",
    description:
      "Documents you edit using Texitor are secure and private. We don't store any of your documents on our servers.",
    icon: "i-heroicons-lock-closed",
  },
  {
    name: "Customizable themes",
    description:
      "Choose from a variety of themes to make writing LaTeX more enjoyable.",
    icon: "i-heroicons-paint-brush",
  },
  {
    name: "Easy to use",
    description:
      "Texitor is designed to be easy to use and intuitive. You can start writing LaTeX documents in no time.",
    icon: "i-heroicons-cursor-arrow-rays",
  },
];
</script>

<template>
  <div id="features" class="bg-white dark:bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2
          class="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400"
        >
          Iterate faster
        </h2>
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
        >
          A dedicated LaTeX editor that puts you in control
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Texitor aims to provide a simple and intuitive interface for writing
          LaTeX documents. It's a powerful tool that allows you to focus on
          writing and compiling your projects quickly.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative pl-16"
          >
            <dt
              class="text-base font-semibold leading-7 text-gray-900 dark:text-white"
            >
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-400"
              >
                <UIcon
                  :name="feature.icon"
                  class="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              {{ feature.name }}
            </dt>
            <dd
              class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300"
            >
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
