import RestaurantSource from '../../data/restaturant-source';
import { customLoader, loadFailed } from '../templates/template-creator';
import '../components/Hero';
import '../components/CardRestaurant';

const RestaurantList = {
  async render() {
    return `
      <hero-banner></hero-banner>
      <section id="main" class="container restos">
        <h2>Temukan Restoran</h2>
        ${customLoader.loading()}
        <div id="restoCards" class="resto-cards"></div>
      </section>
    `;
  },

  async afterRender() {
    const restos = await RestaurantSource.RestaurantList();
    const restoContainer = document.querySelector('#restoCards');

    if (restos.error) {
      restoContainer.innerHTML = loadFailed();
    } else {
      restos.forEach((restaurant) => {
        const restaurantItem = document.createElement('card-restaurant');
        restaurantItem.restaurant = restaurant;
        restoContainer.appendChild(restaurantItem);
      });
      customLoader.loaded();
    }
  },

};

export default RestaurantList;
