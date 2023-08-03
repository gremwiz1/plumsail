import { createApp } from 'vue';
import WeatherWidget from '../components/WeatherWidget.vue';

const app = createApp({});
app.component('weather-widget', WeatherWidget);
app.mount('#app');
