<script setup lang="ts">
import type { Product } from "@/types"
defineProps<{ product: Product }>()
</script>

<template>
  <v-card width="320" variant="elevated">
    <v-img :src="product.image" height="280" class="ma-8"></v-img>
    <v-container class="bg-primary text-secondary">
      <v-card-title class="font-weight-bold">{{ product.title }}</v-card-title>
      <v-card-subtitle class="font-weight-bold">{{ product.category }}</v-card-subtitle>
      <v-card-text class="font-weight-bold mb-n13 text-h6">${{ product.price }}</v-card-text>
      <v-card-actions class="justify-end">
        <v-btn class="bg-secondary text-accent text-capitalize font-weight-bold">Add to Cart</v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>
