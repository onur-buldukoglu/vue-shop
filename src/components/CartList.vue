<script setup lang="ts">
import type { Cart } from "@/types"
import CartListItem from "./CartListItem.vue"
import { ref, type Ref, inject } from "vue"
import { cart as providedCart } from "@/keys"

const cart: Ref<Cart> = ref(JSON.parse(localStorage.getItem("cart")!))

const { removeFromCart, emptyCart } = inject(providedCart)!

function removeItem(index: number) {
  cart.value.items.splice(index, 1)
  removeFromCart(index)
}

function getCartTotal() {
  return (
    cart.value.items
      .map((item) => item.price)
      .reduce((acc, curr) => acc + curr, 0)
      .toFixed(2) || 0
  )
}

function clearCartHandler() {
  emptyCart()
  cart.value = { items: [] }
}
</script>

<template>
  <p class="text-end mr-4">Total: ${{ getCartTotal() }}</p>
  <template v-if="cart.items.length > 0">
    <div v-for="item in cart.items" :key="item.id">
      <CartListItem
        :product="item"
        :index="cart.items.indexOf(item)"
        @remove-item="removeItem(cart.items.indexOf(item))"
      />
    </div>
  </template>
  <template v-else>
    <p class="ma-4">Your cart is empty.</p>
  </template>
  <v-btn
    class="bg-secondary text-accent text-capitalize font-weight-bold align-self-end mr-4 mt-4"
    width="100"
    @click="clearCartHandler"
    >Clear Cart</v-btn
  >
</template>
