import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import cs from 'vuetify/es5/locale/cs'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#2f96ff',
        secondary: '#424242',
        electronics: '#87CEFA', // LightSkyBlue
        toys: '#FFA500', // Orange
        sport: '#32CD32', // LimeGreen
        drugstore: '#FFC0CB', // Pink
        books: '#A52A2A', // Brown
        cars: '#00008B', // DarkBlue
        pets: '#C0C0C0' // Silver
      },
      dark: {
        primary: '#2f96ff',
        background: colors.indigo.base
      }
    }
  },
  icons: {
    iconfont: 'md'
  },
  lang: {
    locales: { cs },
    current: 'cs'
  }
})
