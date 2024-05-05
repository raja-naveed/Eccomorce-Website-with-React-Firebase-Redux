import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDB2kkyb8bhEEldd0hJs_KD5YlnwwwqZC4",
    authDomain: "eccomorce-updated.firebaseapp.com",
    projectId: "eccomorce-updated",
    storageBucket: "eccomorce-updated.appspot.com",
    messagingSenderId: "993302932455",
    appId: "1:993302932455:web:17bd76f4bdbd176330eb42"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export { fireDB, auth }