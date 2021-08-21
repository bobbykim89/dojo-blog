import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDMxOa3vEBpFgeQsoNkUd1UTJvQWRpZs1U',
  authDomain: 'vue-firebase-project-fdbed.firebaseapp.com',
  projectId: 'vue-firebase-project-fdbed',
  storageBucket: 'vue-firebase-project-fdbed.appspot.com',
  messagingSenderId: '12852834673',
  appId: '1:12852834673:web:d6f4d8f379b5cb1364c6d0',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };
