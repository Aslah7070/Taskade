
import { initializeApp } from "firebase/app";

import { getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIRBASE_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIRBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIRBASE_PROJECT_ID,
  storageBucket:process.env.NEXT_PUBLIC_FIRBASE_STORAGE_BUCKET,
  messagingSenderId:process.env.NEXT_PUBLIC_FIRBASE_MESSAGING_SENDER_ID,
  appId:process.env.NEXT_PUBLIC_FIRBASE_APP_ID,
  measurementId:process.env.NEXT_PUBLIC_FIRBASE_MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const db = getFirestore(app);