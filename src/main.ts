import router from './router';
import App from './App.vue';
import './style.css';
import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-free/css/all.min.css'


library.add(faInstagram, faLinkedin, faTwitter, faYoutube)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router);
app.mount('#app');

