import type { Product } from "@/types"

const cartActions = {
  addToCart(item: Product) {
    const cart: { items: Product[] } = JSON.parse(localStorage.getItem("cart") || "")
    cart.items.push(item)

    localStorage.setItem("cart", JSON.stringify(cart))
  },
  removeFromCart(index: number) {
    const cart: { items: Product[] } = JSON.parse(localStorage.getItem("cart") || "")
    cart.items.splice(index, 1)

    localStorage.setItem("cart", JSON.stringify(cart))
  },
  emptyCart() {
    localStorage.setItem("cart", JSON.stringify({ items: [] }))
  }
}

export default cartActions
