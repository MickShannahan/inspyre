export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.farenheit = `${Math.round((100 - ((data.main.temp - 273.15) * 9 / 5)) * 100) / 100}`
    this.celsius = `${Math.round((100 - (data.main.temp - 273.15)) * 100) / 100}`
  }

  Template(tempRead) {
    if (tempRead == 'f') {
      return `
       <div class="col-7  pt-3 pr-1 text-right"></div>
       <h1 class="col-1 px-0 pt-2 pl-1 pr-4 mr-2">${this.farenheit.split('.')[0]}</h1>
       <div class="col-2 px-0 text-left pl-3">
       <div class="row">
       <div class="col-11 pt-2 pr-0">${this.farenheit.split('.')[1]}</div>
       <div  id='temp' class="col-11 pb-5 text-light pr-0" onclick="app.weatherController.changeTempRead('c')">°c</div>
       </div>
       </div>
       `
    } else if (tempRead == 'c') {
      return `
      <div class="col-7  pt-3 pr-1 text-right"></div>
      <h1 class="col-1 px-0 pt-2 pl-1 pr-4 mr-2">${this.celsius.split('.')[0]}</h1>
      <div class="col-2 px-0 text-left pl-3">
      <div class="row">
      <div class="col-11 pt-2 pr-0">${this.celsius.split('.')[1]}</div>
      <div  id='temp' class="col-11 pb-5 text-light pr-0" onclick="app.weatherController.changeTempRead('k')">°f</div>
      </div>
      </div>
       `
    } else {
      return `
       <div class="col-4  pt-3 pr-1 text-right"></div>
       <h1 class="col-6 px-0 pt-2 text-right" >${this.kelvin}</h1>
       <div id='temp' class="col-2 px-0 text-left pl-1 mt-4 mb-5" onclick="app.weatherController.changeTempRead('f')">
       °k
       </div>
       <div class="my-5"></div>
       `
    }
  }
}