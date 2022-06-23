import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Include CSS file
require("halfmoon/css/halfmoon.min.css");

// Import JS Library
var halfmoon = require("halfmoon");
window.halfmoon = halfmoon;

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopyright, faFrown, faMeh, faSmile, faSync } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCopyright, faFrown, faMeh, faSmile, faSync, faGithub);
Vue.component('fa', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
