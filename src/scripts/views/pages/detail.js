import RestaurantSource from '../../data/restaturant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-initiator';
import { createRestoDetailTemplate, customLoader } from '../templates/template-creator';
import FavRestoIdb from '../../data/favourite-resto-idb';

const Detail = {
  async render() {
    return `
      ${customLoader.loading()}
      <section id="restoDetail" class="hero-detail"></section>
      <div id="like-button-container"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailResto(url.id);
    const detail = document.querySelector('#restoDetail');
    detail.innerHTML = createRestoDetailTemplate(resto);
    customLoader.loaded();

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#like-button-container'),
      favouriteRestos: FavRestoIdb,
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        pictureId: resto.pictureId,
        rating: resto.rating,
        address: resto.address,
        city: resto.city,
        menu: resto.menu,
        categories: resto.categories,
      },
    });
  },
};

export default Detail;
