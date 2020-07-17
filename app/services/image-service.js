import Image from "../models/image.js"
import _store from "../store.js"

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  constructor() {
    this.getImage()
  }

  getImage() {
    imgApi.get().then(res => {
      console.log(res);
      _store.commit('images', new Image(res.data))
      console.log(_store.State);
    }).catch(err => console.error(err))
  }
}

const imageService = new ImageService();
export default imageService;
