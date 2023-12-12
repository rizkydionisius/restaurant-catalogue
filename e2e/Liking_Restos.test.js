/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favourite');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.seeElement('.nothing-liked-restaurant');
  I.see('Nothing Liked Restaurant', '.nothing-liked-restaurant');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Nothing Liked Restaurant', '.nothing-liked-restaurant');
  I.amOnPage('/');

  I.seeElement('.resto-item a');
  const firstResto = locate('.resto-item a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favourite');
  I.seeElement('.resto-item a');

  const likedRestoCard = await I.grabTextFrom('.resto-item a');
  assert.strictEqual(firstRestoTitle, likedRestoCard);
});

Scenario('unliking one resto', async ({ I }) => {
  I.see('Nothing Liked Restaurant', '.nothing-liked-restaurant');
  I.amOnPage('/');

  I.seeElement('.resto-item a');
  const firstResto = locate('.resto-item a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favourite');
  I.seeElement('.resto-item a');

  const likedRestoCard = await I.grabTextFrom('.resto-item a');
  assert.strictEqual(firstRestoTitle, likedRestoCard);

  I.click(firstResto);

  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favourite');

  const onFav = await I.grabTextFrom('.nothing-liked-restaurant');
  assert.strictEqual(onFav, 'Nothing Liked Restaurant');
});
