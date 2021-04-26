import Dashboard from '@/views/Dashboard'
import AddNewProduct from '@/views/AddNewProduct'
import ShoppingCartCheckout from '@/views/ShoppingCartCheckout'
import NotFound from '@/views/NotFound'
// import ProductDetail from '@/components/shopping/ProductDetail'

export default [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCartCheckout
  },
  {
    path: '/add-new-product',
    name: 'add-new-product',
    component: AddNewProduct
  },
  {
    path: '/:category/:subCategory?',
    name: 'electronics',
    component: Dashboard,
    children: [
      {
        path: '/:category/detail/:id',
        name: 'detail',
        component: Dashboard
      }
    ]
  },
  {
    path: '/:category/:subCategory?',
    name: 'toys',
    component: Dashboard,
    children: [
      {
        path: '/:category/detail/:id',
        name: 'detail',
        component: Dashboard
      }
    ]
  },
  {
    path: '/:category/:subCategory?',
    name: 'sport',
    component: Dashboard,
    children: [
      {
        path: '/:category/detail/:id',
        name: 'detail',
        component: Dashboard
      }
    ]
  },
  {
    path: '/:category/:subCategory?',
    name: 'drugstore',
    component: Dashboard,
    children: [
      {
        path: '/:category/detail/:id',
        name: 'detail',
        component: Dashboard
      }
    ]
  },
  {
    path: '/:category/:subCategory?',
    name: 'books',
    component: Dashboard,
    children: [
      {
        path: '/:category/detail/:id',
        name: 'detail',
        component: Dashboard
      }
    ]
  },
  {
    path: '/:category/:subCategory?',
    name: 'cars',
    component: Dashboard,
    children: [
      {
        path: '/:category/detail/:id',
        name: 'detail',
        component: Dashboard
      }
    ]
  },
  {
    path: '/:category/:subCategory?',
    name: 'pets',
    component: Dashboard,
    children: [
      {
        path: '/:category/detail/:id',
        name: 'detail',
        component: Dashboard
      }
    ]
  },

  // Tohle musi byt vzdy posledni - je to fallback pro pripad, ze cesta nesedi do zadne predchozi
  {
    path: '*',
    component: NotFound
  }
]
