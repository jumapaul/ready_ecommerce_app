import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAXDvm5nIa6zXjlXBfk8cqavgl0WxWBp_g",
    authDomain: "e-commerce-vue-795f7.firebaseapp.com",
    projectId: "e-commerce-vue-795f7",
    storageBucket: "e-commerce-vue-795f7.appspot.com",
    messagingSenderId: "111243465456",
    appId: "1:111243465456:web:31f24a923bc605282d6835"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}