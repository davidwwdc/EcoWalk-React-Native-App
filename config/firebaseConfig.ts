import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAUB96ZGotxHb0R6EdjCgH1IVmt3Boqhvc',
  authDomain: 'comp5216-wwan0284.firebaseapp.com',
  databaseURL: 'https://comp5216-wwan0284.firebaseio.com',
  projectId: 'comp5216-wwan0284',
  storageBucket: 'project-id.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
