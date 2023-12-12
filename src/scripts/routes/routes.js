import RestaurantList from '../views/pages/resto';
import Detail from '../views/pages/detail';
import Favourite from '../views/pages/favourite';

const routes = {
  '/': RestaurantList, // default page
  '/favourite': Favourite,
  '/detail/:id': Detail,
};

export default routes;
