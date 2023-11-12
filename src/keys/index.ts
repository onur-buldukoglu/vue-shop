import type { Product } from "@/types"
import type { InjectionKey } from "vue"

export const cart = Symbol() as InjectionKey<{
  addToCart: (item: Product) => void
  removeFromCart: (index: number) => void
  emptyCart: () => void
}>
