<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import { cart } from "@/keys"
import { provide } from "vue"

import cartActions from "@/actions/cart"

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify({ items: [] }))
}

provide(cart, cartActions)
</script>

<template>
  <header class="bg-secondary mb-8 py-4 px-6 d-flex justify-space-between align-center">
    <RouterLink to="/" class="bg-secondary text-accent"><v-icon icon="mdi-home" /></RouterLink>
    <RouterLink to="/cart" class="bg-secondary text-accent"><v-icon icon="mdi-cart" /></RouterLink>
  </header>
  <RouterView />
</template>
