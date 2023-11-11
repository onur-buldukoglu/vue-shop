<script setup lang="ts">
import { ref } from "vue"
const user = ref({ username: "mor_2314", password: "83r5^_" })
const isFormValid = ref(false)
const rules = {
  username: [
    (value: string) => {
      if (value) return true

      return "You must enter a username."
    }
  ],
  password: [
    (value: string) => {
      if (value) return true

      return "You must enter a password."
    }
  ]
}
async function submitHandler() {
  if (isFormValid.value) {
    console.log(JSON.stringify(user.value))
    const res = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user.value)
    })
    const token: string = (await res.json()).token
    localStorage.setItem("token", token)
  }
}
</script>

<template>
  <h2>Login</h2>
  <v-form @submit.prevent="submitHandler" v-model="isFormValid">
    <v-sheet width="320px" class="mx-auto">
      <v-text-field
        label="Username"
        type="text"
        class="mb-2"
        clearable
        required
        v-model="user.username"
        :rules="rules.username"
      />
      <v-text-field
        label="Password"
        type="password"
        class="mb-2"
        clearable
        required
        v-model="user.password"
        :rules="rules.password"
      />
      <v-btn width="100%" type="submit" color="#42b883">Login</v-btn>
    </v-sheet>
  </v-form>
</template>

<style>
h2 {
  color: #42b883;
  align-self: center;
  padding-bottom: 1rem;
}
</style>
