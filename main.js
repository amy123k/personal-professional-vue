import './assets/main.css'
import '../css/main.min.css'
import './assets/styles.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'https://code.jquery.com/jquery-3.7.1.min.js'
import 'https://kit.fontawesome.com/9c27049257.js'
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'

import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/about', component: About},
        {path: '/portfolio', component: Portfolio},
        {path: '/contact', component: Contact},
        {path: '/portfolio/:id', component: Portfolio}
    ]
});

const app = createApp(App)

app.use(router);
app.component('Home', Home);
app.component('About', About);
app.component('Portfolio', Portfolio);
app.component('Contact', Contact);

app.mount('#app')