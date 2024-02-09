import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBVjEde4-qKRV7OBfuc5NYCkzONWUy-D-Q",
    authDomain: "todo-web-app-661fd.firebaseapp.com",
    databaseURL: "https://todo-web-app-661fd-default-rtdb.firebaseio.com",
    projectId: "todo-web-app-661fd",
    storageBucket: "todo-web-app-661fd.appspot.com",
    messagingSenderId: "829190625721",
    appId: "1:829190625721:web:ab21a833f3c9015331fe68",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth();
