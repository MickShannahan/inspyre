export default class Quote {
  constructor(data) {
    console.log('[RAW QUOTE API DATA]', data);
    this.id = data.id
    this.author = data.author
    this.body = data.body
  }

  get Template() {
    return `
    <div id="quote-body" class="col-12 text-center" onclick="app.quoteController.getQuote()">${this.body}</div>
    <div id="quote-author" class="col-12 text-reveal text-center"  >${this.author}</div>
    `
  }
}