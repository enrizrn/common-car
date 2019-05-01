import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/firebase/';

import './styles/quasar.styl';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';

import { Quasar } from 'quasar';

Vue.use(Quasar, {
    config: {},
    directives: {},
    plugins: {},
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
