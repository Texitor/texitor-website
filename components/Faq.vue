<script setup lang="ts">
interface FAQItem {
  label: string;
  content: string;
  defaultOpen?: boolean;
}

const FAQItems = <FAQItem[]>[
  {
    label: "Can i use Texitor at work or school?",
    defaultOpen: true,
    content:
      "Yes! Texitor is free to use for both personal and commercial use. You can use it at work or school without any restrictions!",
  },
  {
    label: "How is Texitor so fast?",
    content:
      "Texitor was built using low-level technologies like Rust. This means that Texitor is blazing fast and lightweight!",
  },
  {
    label: "Why not web-based?",
    content:
      "Texitor runs locally on your computer. This means that your data is not sent to any server and you can use it offline. You'll also see lightning-fast performance!",
  },
  {
    label: "How do I update Texitor?",
    content:
      "Texitor supports auto updates. You will be notified when a new version is available!",
  },
  {
    label: "Is it hard to setup?",
    content:
      "Texitor is designed to be as seamless as possible to set up. You can download it and start using it in less than 5 minutes!",
  },
];
</script>

<template>
  <div id="faq" class="py-16">
    <UContainer class="flex flex-col my-16">
      <h1 class="text-3xl font-bold mt-16 mb-8">FAQ</h1>
      <UAccordion :items="FAQItems" color="black" size="xl" variant="solid" />
    </UContainer>
  </div>
</template>
