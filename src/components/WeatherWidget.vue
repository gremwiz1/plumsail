<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="weather-widget">
    <div class="input-container">
      <input v-model="inputCity" type="text" placeholder="Введите город">
      <button @click="getWeather">Показать погоду</button>
    </div>
    <div class="city">{{ city }}</div>
    <div class="temperature">{{ temperature }} °C</div>
    <div class="description">{{ description }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const inputCity = ref<string>('');
    const city = ref<string>('');
    const temperature = ref<number | null>(null);
    const description = ref<string | null>(null);

    const fetchWeather = async (cityName: string) => {
      const apiKey = process.env.VUE_APP_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=ru`,
      );
      const data = await response.json();

      return {
        temperature: data.main.temp,
        description: data.weather[0].description,
      };
    };

    const getWeather = async () => {
      city.value = inputCity.value;
      const weatherData = await fetchWeather(city.value);
      temperature.value = weatherData.temperature;
      description.value = weatherData.description;
    };

    return {
      inputCity,
      city,
      temperature,
      description,
      getWeather,
    };
  },
});
</script>

<style lang="scss">
.weather-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f3f5;
  border-radius: 8px;
  padding: 20px;
  width: 230px;
  font-family: 'Arial', sans-serif;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin: auto;

  .city {
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
    text-align: center;
  }

  .temperature {
    font-size: 24px;
    color: #2196f3;
    margin-bottom: 5px;
    text-align: center;
  }

  .description {
    font-size: 14px;
    color: #666;
    text-align: center;
  }

  .input-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 100%;
    input {
      padding: 5px;
      border-radius: 4px;
      border: 1px solid #ccc;
      width: 60%;
    }
    button {
      padding: 5px 10px;
      border: none;
      border-radius: 4px;
      background-color: #2196f3;
      color: #fff;
      cursor: pointer;
      width: 38%;
    }
  }
}
</style>
