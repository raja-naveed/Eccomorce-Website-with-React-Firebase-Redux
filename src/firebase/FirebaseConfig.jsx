import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDjypFTcIT7YB0mr_XAzn_Bw0SkCLNVubA",
    authDomain: "ecommorce-c9c4d.firebaseapp.com",
    projectId: "ecommorce-c9c4d",
    storageBucket: "ecommorce-c9c4d.appspot.com",
    messagingSenderId: "781328186798",
    appId: "1:781328186798:web:303055c41ffdf9c9759c3f"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export { fireDB, auth }