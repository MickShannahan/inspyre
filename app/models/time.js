export default class Time {
  constructor(data) {
    this.day = this.setDay(data.day)
    this.month = this.setMonth(data.month)
    this.date = data.date
    this.hours = data.hours
    this.minutes = data.minutes
  }

  setMonth(input) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return months[input]
  }

  setDay(input) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[input]
  }




  get Template() {
    let minute = this.minutes
    let hour = this.hours
    let amPm = ''
    if (this.minutes.lenght < 2) {
      minute = '0' + this.minutes
    }
    if (this.hours > 12) {
      hour = (this.hours - 12)
      amPm = 'pm'
    } else {
      hour = this.hours
      amPm = 'am'
    }
    return `
        <h1 id="large-clock" class="col-12">${hour}:${minute}</h1>
				<h5 class="col-12 clock-type">${this.day} ${this.month} ${this.date}</h5>
    `
  }
}