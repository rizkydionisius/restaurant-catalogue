/* eslint-disable no-undef */
import FavRestoIdb from '../src/scripts/data/favourite-resto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Resto', () => {
  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('#like-button').dispatchEvent(new Event('click'));

    const resto = await FavRestoIdb.getResto(1);
    expect(resto).toEqual({ id: 1 });

    await FavRestoIdb.deleteResto(1);
  });

  it('should not show restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    await FavRestoIdb.putResto({ id: 1 });

    document.querySelector('#like-button').dispatchEvent(new Event('click'));

    expect(await FavRestoIdb.getRestaurantList()).toEqual([{ id: 1 }]);

    await FavRestoIdb.deleteResto(1);
  });

  it('should not add resto when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({});

    document.querySelector('#like-button').dispatchEvent(new Event('click'));

    expect(await FavRestoIdb.getRestaurantList()).toEqual([]);
  });
});
