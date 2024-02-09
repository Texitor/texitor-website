<script setup lang="ts">
const faqs = [
  {
    id: 1,
    question: "Can i use Texitor at work or school?",
    answer:
      "Yes! Texitor is free to use for both personal and commercial use. You can use it at work or school without any restrictions!",
  },
  {
    id: 2,
    question: "How is Texitor so fast?",
    answer:
      "Texitor was built using low-level technologies like Rust. This means that Texitor is blazing fast and lightweight!",
  },
  {
    id: 3,
    question: "Why not web-based?",
    answer:
      "Texitor runs locally on your computer. This means that your data is not sent to any server and you can use it offline. You'll also see lightning-fast performance!",
  },
  {
    id: 4,
    question: "How do I update Texitor?",
    answer:
      "Texitor supports auto updates. You will be notified when a new version is available!",
  },
  {
    id: 5,
    question: "Is Texitor hard to setup?",
    answer:
      "Texitor is designed to be as seamless as possible to set up. You can download it and start using it in less than 5 minutes!",
  },
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
