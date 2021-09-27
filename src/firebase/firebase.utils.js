import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: 'AIzaSyBkdZzHmvKxjG7HYH5KVIJQtthOmHtKMTg',
  authDomain: 'crown-db-a186b.firebaseapp.com',
  projectId: 'crown-db-a186b',
  storageBucket: 'crown-db-a186b.appspot.com',
  messagingSenderId: '655332096378',
  appId: '1:655332096378:web:82f09135bdb4881f11fec3',
  measurementId: 'G-8Y8B5LN581',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
