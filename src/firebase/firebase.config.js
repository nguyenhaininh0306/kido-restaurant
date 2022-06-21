import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyB8Gv8ZEhSVb7-bikUKXy2ocJ1TpKerYns',
  authDomain: 'restaurant-app-4f4e9.firebaseapp.com',
  databaseURL: 'https://restaurant-app-4f4e9-default-rtdb.firebaseio.com',
  projectId: 'restaurant-app-4f4e9',
  storageBucket: 'restaurant-app-4f4e9.appspot.com',
  messagingSenderId: '711409175257',
  appId: '1:711409175257:web:e7314daf772ec8130f8cc8',
}

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }
