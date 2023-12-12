import CONFIG from '../../globals/config';

class CardRestaurant extends HTMLElement {
  set restaurant(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    const {
      id, pictureId, name, city, rating, description,
    } = this._resto;

    this.innerHTML = `
    <div id="restoItem" class="resto-item">
    <a href="/#/detail/${id}">
      <div class="thumbnail-item">  
        <img class="lazyload" data-src="${CONFIG.BASE_THUMBNAIL_URL + pictureId}" alt="${name}" />
      </div>
      <div class="desc">
        <h3 aria-label="${`${name}, ${city}`}" class="title">
          ${name}
        </h3>
        <span class="rating">${rating}</span>
        <br>
        <span class="label"><b>${city}</b></span>
        <p id="restoDesc">${description.substring(0, 110)}...</p>
      </div>
    </a>
  </div>
    `;
  }
}
customElements.define('card-restaurant', CardRestaurant);
