import { firestore } from '../../firebase.js'

class ProductsDataService {
  getAll (colection) {
    return firestore.collection(colection)
  }

  create (colection, product) {
    return firestore.collection(colection).add(product)
  }

  update (colection, id, newValue) {
    return firestore.collection(colection).doc(id).update(newValue)
  }

  delete (colection, id) {
    return firestore.collection(colection).doc(id).delete()
  }
}

export default new ProductsDataService()
