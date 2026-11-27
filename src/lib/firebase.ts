import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCHg9fXRpUPnJXSIUNEsJfktc2Lw6eXejw',
  authDomain: 'iwamad-chat-c8dfe.firebaseapp.com',
  databaseURL: 'https://iwamad-chat-c8dfe-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'iwamad-chat-c8dfe',
  storageBucket: 'iwamad-chat-c8dfe.firebasestorage.app',
  messagingSenderId: '586558240882',
  appId: '1:586558240882:web:fc1065ecf1fae8c0c26aeb',
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
