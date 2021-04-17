import Dashboard from '@/views/Dashboard'
import AddNewProduct from '@/views/AddNewProduct'
import ShoppingCartCheckout from '@/views/ShoppingCartCheckout'
import NotFound from '@/views/NotFound'

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
    path: '/electronics',
    name: 'electronics',
    component: Dashboard
  },
  {
    path: '/toys',
    name: 'toys',
    component: Dashboard
  },
  {
    path: '/sport',
    name: 'sport',
    component: Dashboard
  },
  {
    path: '/drugstore',
    name: 'drugstore',
    component: Dashboard
  },
  {
    path: '/books',
    name: 'books',
    component: Dashboard
  },
  {
    path: '/cars',
    name: 'cars',
    component: Dashboard
  },
  {
    path: '/pets',
    name: 'pets',
    component: Dashboard
  },

  {
    path: '/electronics/*',
    name: 'electronics/',
    component: Dashboard
  },

  // Tohle musi byt vzdy posledni - je to fallback pro pripad, ze cesta nesedi do zadne predchozi
  {
    path: '*',
    component: NotFound
  }
]
