export default class Image {
  constructor(data) {
    console.log('[RAW IMAGE API DATA]', data);
    this.id = data.id
    this.large_url = data.large_url
    this.url = data.url


  }
}