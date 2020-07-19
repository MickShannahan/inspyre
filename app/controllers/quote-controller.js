import QuoteService from "../services/quote-service.js";
import _store from "../store.js"

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)

function _drawQuote() {
  document.getElementById('quotes').innerHTML = _store.State.quotes.Template
}

export default class QuoteController {
  constructor() {
    // console.log('hello from quote controller');
    _store.subscribe('quotes', _drawQuote)
    QuoteService.getQuote()
  }

  getQuote() {
    QuoteService.getQuote()
  }

}
