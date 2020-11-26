import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCVx3FVjaAswHFwcE3h9eWoJnpc8OQcrtQ",
  authDomain: "gmd-slides.firebaseapp.com",
  databaseURL: "https://gmd-slides.firebaseio.com",
  projectId: "gmd-slides",
  storageBucket: "gmd-slides.appspot.com",
  messagingSenderId: "107520563245",
  appId: "1:107520563245:web:0dd65841018dbe0227c0a4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const DB = firebase.database();

export const eventsRef = firebase.database().ref("events");
export const infoRef = firebase.database().ref("info");

infoRef.child("usersCount").transaction((count) => {
  return (count || 0) + 1;
});
