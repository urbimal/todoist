import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyAJ9VkL3zKRCkkxkEoypOeW-IrJzXz8nt8',
  authDomain: 'todoist-9a0a3.firebaseapp.com',
  databaseURL: 'https://todoist-9a0a3.firebaseio.com',
  projectId: 'todoist-9a0a3',
  storageBucket: 'todoist-9a0a3.appspot.com',
  messagingSenderId: '569125842547',
  appId: '1:569125842547:web:82791c2b9a21fbcc724406',
});

export { firebaseConfig as firebase };
