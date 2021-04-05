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
        primary: '#2f96ff'
      },
      dark: {
        /* primary: colors.blue.lighten3, */
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
