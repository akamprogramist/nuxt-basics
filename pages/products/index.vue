<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="(item, index) in products" :key="index">
        <ProductCard :product="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

useHead({
  title: "Nuxt Basics | Merch",
  meta: [{ name: "description", content: "Nuxt 3 Merch" }],
});

// fetch products
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>
