import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA5AgWMA2XwY7H6DiEEkzpCLQTTk94ZJeU',
  authDomain: 'contact-book-ac98e.firebaseapp.com',
  databaseURL: 'https://contact-book-ac98e.firebaseio.com',
  projectId: 'contact-book-ac98e',
  storageBucket: 'contact-book-ac98e.appspot.com',
  messagingSenderId: '1055760123901',
  appId: '1:1055760123901:web:5675817eb1f2dba65d3b94'
  // measurementId: 'G-JXD1Q5L4XR'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore()
