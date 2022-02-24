import axios from 'axios';

export const dateBuilder = (d) => {
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
  "Sep", "Oct", "Nov", "Dec"]
  
  const date = {
    day: d.getDate(),
    month: months[d.getMonth()],
    year: d.getFullYear(),
    time: `${d.getHours()}:${d.getMinutes()}`
  }

  return date
}

export const randomNumber = () => {
  return Math.floor(Math.random() * new Date())
}

  
const api = {
  key: '25265222d00d276b84c31852a2ec814a',
  base: 'https://api.openweathermap.org/data/2.5/',
  lat: 53.902287,
  lon: 27.561824
}

export const getWeather = async () => {
  try{
    const response = await axios.get(`${api.base}weather?lat=${api.lat}&lon=${api.lon}&appid=${api.key}`);

    return response.data;
  } catch(error) {
    console.log(error)
  }

}

