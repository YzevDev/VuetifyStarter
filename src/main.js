import { createApp } from 'vue';
import { RouterView } from 'vue-router';
import router from '@/plugins/router';
import vuetify from '@/plugins/vuetify';

createApp(RouterView).use(router).use(vuetify).mount('#app');
