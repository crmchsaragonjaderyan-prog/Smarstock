import { initializeApp, getApp, getApps } from 'firebase/app';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Auth, initializeAuth, getAuth } from 'firebase/auth';
// @ts-ignore - getReactNativePersistence is only typed in Firebase's react-native export condition
import { getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyArMWlsNGJGoOdON-9SIba1aTAW6USHh4M',
  authDomain: 'smartstock12-7f4fd.firebaseapp.com',
  projectId: 'smartstock12-7f4fd',
  storageBucket: 'smartstock12-7f4fd.firebasestorage.app',
  messagingSenderId: '257323668312',
  appId: '1:257323668312:web:dd4cbaebd6a1d3d7664b2d',
  measurementId: 'G-PBF69XRDC8',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

let auth: Auth;

if (Platform.OS === 'web') {
  auth = getAuth(app);
} else {
  try {
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch {
    auth = getAuth(app);
  }
}

const db = getFirestore(app);

export { app, auth, db };