import * as firebase from "firebase";
require('@firebase/firestore');
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCB481g4RU1DpGhfChsF079_gRyKvg25sE",
  authDomain: "wily-app-91c8a.firebaseapp.com",
  projectId: "wily-app-91c8a",
  storageBucket: "wily-app-91c8a.appspot.com",
  messagingSenderId: "752978616102",
  appId: "1:752978616102:web:cf4e4ab7466ec1dc7babe7",
  databaseURL : "https://wily-app-91c8a.firebaseio.com"
};
  

firebase.initializeApp(firebaseConfig)

export default firebase.firestore();