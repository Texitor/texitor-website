<script setup lang="ts">
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];
</script>

<template>
  <div id="faqs" class="bg-white dark:bg-gray-900">
    <div
      class="mx-auto max-w-7xl divide-y divide-gray-900/10 dark:divide-white/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40"
    >
      <h2
        class="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white"
      >
        Frequently asked questions
      </h2>
      <dl
        class="mt-10 space-y-8 divide-y divide-gray-900/10 dark:divide-white/10"
      >
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
        >
          <dt
            class="text-base font-semibold leading-7 text-gray-900 dark:text-white lg:col-span-5"
          >
            {{ faq.question }}
          </dt>
          <dd class="mt-4 lg:col-span-7 lg:mt-0">
            <p class="text-base leading-7 text-gray-600 dark:text-gray-300">
              {{ faq.answer }}
            </p>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
