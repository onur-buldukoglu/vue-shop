<script setup lang="ts">
import type { Ref } from "vue"
import type { Product } from "@/types/index.ts"
import { ref } from "vue"
import ProductCard from "@/components/ProductCard.vue"
const products: Ref<Product[]> = ref([])

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => (products.value = json))
</script>
<template>
  <v-container>
    <v-row>
      <v-col v-for="product in products" :key="product.id"
        ><ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>
