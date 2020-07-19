import WeatherService from "../services/weather-service.js";
import _store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.
let _tempRead = 'c'
//TODO Complete rendering data to the screen
function _drawWeather() {
  console.log("THE WEATHER MAN SAYS:", _store.State.weather);
  document.getElementById('weather').innerHTML = _store.State.weather.Template(_tempRead)
}
export default class WeatherController {
  constructor() {
    _store.subscribe("weather", _drawWeather);
    WeatherService.getWeather();
  }

  changeTempRead(input) {
    _tempRead = input
    _drawWeather()
  }
}
