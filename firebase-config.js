import { initializeApp, getApps } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "XXXXX",
    authDomain: "XXXXX",
    projectId: "XXXXX",
    storageBucket: "XXXXX",
    messagingSenderId: "XXXXX",
    appId: "XXXXX"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);


