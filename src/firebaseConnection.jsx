import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyArLBm-DxSTUBXdm-fPZUdgEccKmyycRVI",
    authDomain: "tekia-f6f31.firebaseapp.com",
    projectId: "tekia-f6f31",
    storageBucket: "tekia-f6f31.appspot.com",
    messagingSenderId: "1032154793191",
    appId: "1:1032154793191:web:f9bb1bbf63049f86894e42",
    measurementId: "G-456B43LY4F"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };