import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Include CSS file
require("halfmoon/css/halfmoon.min.css");

// Import JS Library
window.halfmoon = require("halfmoon");

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFrown } from '@fortawesome/free-regular-svg-icons'
import { faMeh } from '@fortawesome/free-regular-svg-icons'
import { faSmile } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSmile);
library.add(faMeh);
library.add(faFrown);

Vue.component('fa', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
