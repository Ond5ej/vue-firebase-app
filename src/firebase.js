import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCn1_by_D6An2OhD0m79vAXOCcJTajlxus',
  authDomain: 'vuefirebase-41eca.firebaseapp.com',
  projectId: 'vuefirebase-41eca',
  storageBucket: 'vuefirebase-41eca.appspot.com',
  messagingSenderId: '1052283433842',
  appId: '1:1052283433842:web:2be57d7d28e73b3b6263eb'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore()
const storage = firebase.storage()

export { firebase, auth, firestore, storage }
