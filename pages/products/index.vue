<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="(item, index) in products" :key="index">
        <NuxtLink :to="`/products/${item.id}`">{{ item.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

// fetch products
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>
