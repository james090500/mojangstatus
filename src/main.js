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
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faFrown } from '@fortawesome/free-regular-svg-icons'
import { faMeh } from '@fortawesome/free-regular-svg-icons'
import { faSmile } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub);
library.add(faCopyright);
library.add(faSmile);
library.add(faMeh);
library.add(faFrown);

Vue.component('fa', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
