import firebase from "firebase/app";
import "firebase/database";
import { UserPress } from "../components/UserPressFeedback";

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

export enum DBEventType {
  Location = "location",
}

type DBEventLocation = {
  type: DBEventType.Location;
  timestamp: number;
  value: UserPress;
};

type DBEventCallback = {
  (obj: DBEventObject): void;
};

type DBEventObject = DBEventLocation;

export const listenForEvents = (cb: DBEventCallback) => {
  const t = new Date().getTime();

  eventsRef.on("child_added", (snapshot) => {
    const val: DBEventObject = snapshot.val();

    if (val.timestamp > t) {
      cb(val);
    }
  });
};

export const addEvent = (type: DBEventType, value: any) => {
  const item = eventsRef.push();
  return item.set({
    timestamp: new Date().getTime(),
    type,
    value,
  });
};
