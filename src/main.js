import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import './assets/main.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    options: {
      customProperties: true
    }
  },
  themes: {
    light: {
      primary: '#1976D2',
      secondary: '#424242',
      accent: '#82B1FF',
      error: '#FF5252',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FFC107',
      // Customize elevation colors
      elevation: {
        0: '#ffffff', // No shadow
        1: '#f5f5f5', // Very light shadow
        2: '#eeeeee', // Light shadow
        3: '#FFBF00' // lime
        // Add more custom colors as needed
      }
    }
  }
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
