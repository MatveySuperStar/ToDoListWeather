import axios from 'axios';

const defaultState = {
  todo: []
}

const api = {
  key: '25265222d00d276b84c31852a2ec814a',
  base: 'https://api.openweathermap.org/data/2.5/',
  lat: 53.902287,
  lon: 27.561824
}
const getWeather = async () => {
  const response = await axios.get(`${api.base}weather?lat=${api.lat}&lon=${api.lon}&appid=${api.key}`);
  const weather = response.data
  return weather
}

const dateBuilder = (d) => {
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "August",
  "September", "October", "November", "December"]
  
  const date = {
    day: d.getDate(),
    months: months[d.getMonth()],
    year: d.getFullYear()
  }

  return date
}

const date = dateBuilder(new Date())  

export const todoReducer = (state, action) => {
  switch(action.type) {
    case "ADD_RECORD" : 

      return {...state, todo: [...state, action.payload]}
  }
}