import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCgXKomyhqKZu_Tj_iR8xZRgftHFVzYNlw',
  authDomain: 'maxswim-38f37.firebaseapp.com',
  projectId: 'maxswim-38f37',
  databaseURL: 'https://maxswim-38f37.firebaseio.com',
  storageBucket: 'maxswim-38f37.appspot.com',
  messagingSenderId: '933497191677',
  appId: '1:933497191677:web:e6ea0091c58594fb185294',
};
// Initialize Firebase

if (!firebase.apps.length) {
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore(app);
} else {
  firebase.app(); // if already initialized, use that one
}

export {firebase};
