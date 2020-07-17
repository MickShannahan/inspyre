import ImageService from "../services/image-service.js";
import _store from "../store.js"



function _drawBackground() {
  document.body.style.backgroundImage = `url(${_store.State.images.url})`;
  document.body.style.backgroundSize = `100vw, auto`
  console.log('drawbackground ran');
}



export default class ImageController {
  constructor() {
    _store.subscribe('images', _drawBackground);
  }


}
