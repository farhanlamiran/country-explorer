import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router';
// Import icon brand yang kamu mau
import { faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-free/css/all.min.css'

// Tambahkan icon ke library
library.add(faInstagram, faLinkedin, faTwitter, faYoutube)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)


app.use(router);
app.mount('#app');

