import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark:{
        primary: colors.grey.darken3,
        secondary: colors.indigo.lighten1,
        accent: colors.cyan.accent3,
      }
    }
  },
  iconfont: 'md',
});
