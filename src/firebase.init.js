
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAMWFxCdnuQ84VQwO4Ds-IFH0XquwREJhw",
    authDomain: "mobile-land-e72eb.firebaseapp.com",
    projectId: "mobile-land-e72eb",
    storageBucket: "mobile-land-e72eb.appspot.com",
    messagingSenderId: "831270661407",
    appId: "1:831270661407:web:090631fb0e86d3c635d42a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;