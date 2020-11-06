import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyA5C_w67VpS7tXjAKR0y9Tr_sxaZJkO7kM",
  authDomain: "books-react-fire.firebaseapp.com",
  databaseURL: "https://books-react-fire.firebaseio.com",
  projectId: "books-react-fire",
  storageBucket: "books-react-fire.appspot.com",
  messagingSenderId: "762158878472",
  appId: "1:762158878472:web:c15f2246263c5de377a6bd"
}

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

// Export DB Object
export const db = fb.firestore()





