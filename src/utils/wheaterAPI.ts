/* eslint-disable import/prefer-default-export */
export const fetchWeather = async (cityName: string) => {
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
