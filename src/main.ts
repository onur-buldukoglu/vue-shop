import "./assets/main.css"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import { aliases, mdi } from "vuetify/iconsets/mdi"

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#42b883",
          secondary: "#35495e",
          accent: "#dde5ec"
        }
      }
    }
  }
})

const app = createApp(App)

app.use(vuetify)
app.use(router)

app.mount("#app")
