import TimeService from "../services/time-service.js";
import _store from "../store.js"

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)

function _drawTime() {
  document.getElementById('clock').innerHTML = _store.State.time.Template
}

export default class QuoteController {
  constructor() {
    // console.log('hello from quote controller');
    _store.subscribe('time', _drawTime)
    TimeService.getTime()
  }


}
