<script setup lang="ts">
import type { Product } from "@/types"

defineEmits(["removeItem"])
defineProps<{ product: Product; index: number }>()
</script>

<template>
  <v-card class="d-flex pa-4 ma-4">
    <v-img :src="product.image" width="80" />
    <v-container>
      <v-card-title>{{ product.title }}</v-card-title>
      <v-card-text>${{ product.price }}</v-card-text>
    </v-container>
    <v-card-actions
      ><v-btn
        class="bg-secondary text-accent text-capitalize font-weight-bold"
        @click="$emit('removeItem')"
        >Remove</v-btn
      ></v-card-actions
    >
  </v-card>
</template>
