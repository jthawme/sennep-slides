import firebase from "firebase/app";
import "firebase/database";
import uniqid from "uniqid";
import { UserPress } from "../components/UserPressFeedback";

const firebaseConfig = {
  apiKey: "AIzaSyA3jm4FpypUGoreqiV1-I_H-AZxaHPE6xM",
  authDomain: "sennep-talk.firebaseapp.com",
  databaseURL:
    "https://sennep-talk-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sennep-talk",
  storageBucket: "sennep-talk.appspot.com",
  messagingSenderId: "143389696507",
  appId: "1:143389696507:web:0a26a471c1c8f27d30ab5e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const DB = firebase.database();

export const eventsRef = firebase.database().ref("events");
export const infoRef = firebase.database().ref("info");

const uid = uniqid();
infoRef.child(`usersCount/${uid}`).set(true);
infoRef.child(`usersCount/${uid}`).onDisconnect().remove();

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
