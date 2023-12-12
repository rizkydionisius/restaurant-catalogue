import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestoContract';
import FavRestoIdb from '../src/scripts/data/favourite-resto-idb';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavRestoIdb.getRestaurantList()).forEach(async (resto) => {
      await FavRestoIdb.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavRestoIdb);
});
