import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// import firebaseui from 'firebaseui';

const config = {
  apiKey: "AIzaSyB6YP0uxPwk6v9xY9e7JxNKe4erjdall-E",
  authDomain: "react-express-test.firebaseapp.com",
  databaseURL: "https://react-express-test.firebaseio.com",
  storageBucket: "react-express-test.appspot.com",
  messagingSenderId: "767714239543"
};

const app = firebase.initializeApp(config);
const database = app.database();

export default database;
