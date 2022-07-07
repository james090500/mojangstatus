import { createApp } from "vue";

// Pages
import MojangStatus from './MojangStatus.vue'

// Create Vue App
const app = createApp(MojangStatus);

// Include Halfmoon
require("halfmoon/css/halfmoon.min.css");
import "halfmoon";

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopyright, faFrown, faMeh, faSmile, faSync } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCopyright, faFrown, faMeh, faSmile, faSync, faGithub);
app.component("font-awesome-icon", FontAwesomeIcon);

// Axios
app.config.globalProperties.$baseUrl = (process.env.NODE_ENV == "development") ? 'http://localhost:8787' : 'https://api.mojangstat.us'
import axios from "axios";
let axiosInstance = axios.create({
    baseURL: app.config.globalProperties.$baseUrl
});
app.config.globalProperties.axios = axiosInstance;

// Mount Vue app
app.mount("#app");