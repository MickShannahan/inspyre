import Time from "../models/time.js"
import _store from "../store.js"


// @ts-ignore
const _timeApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/time",
  timeout: 3000
});



//TODO create methods to retrieve data trigger the update window when it is complete
class TimeService {
  constructor() {
    this.getTime
    this.startClock()
  }

  startClock() {
    setInterval(this.getTime, 2000)
  }
  getTime() {
    let currentTime = new Date()
    let day = currentTime.getDay()
    let month = currentTime.getMonth()
    let date = currentTime.getDate()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    console.log(minutes, hours, date);
    let clockTime = (new Time(
      {
        day: day,
        month: month,
        hours: hours,
        minutes: minutes,
        date: date
      }
    ))
    _store.commit('time', clockTime)
    console.log(_store.State.time);
  }
}

const timeService = new TimeService();
export default timeService;
