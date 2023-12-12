// eslint-disable-next-line import/no-unresolved, import/extensions
import LikeButtonPresenter from '../../src/scripts/utils/like-button-initiator';
import FavRestoIdb from '../../src/scripts/data/favourite-resto-idb';

const createLikeButtonPresenterWithResto = async (resto) => {
  document.body.innerHTML = '<div id="like-button-container"></div>';
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#like-button-container'),
    favouriteRestos: FavRestoIdb,
    resto,
  });
};
// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithResto };
