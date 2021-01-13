import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap' // import bootstrap
import 'bootstrap/js/dist/util' // import bootstrap
import 'bootstrap/js/dist/alert' // import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css' // import bootstrap
import '@/assets/css/custom.css' // import custom css
import VueHtml2pdf from 'vue-html2pdf' // import html2pdf
import vSelectMenu from 'v-selectmenu' //import selectmenu

Vue.use(vSelectMenu)

Vue.use(VueHtml2pdf)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
