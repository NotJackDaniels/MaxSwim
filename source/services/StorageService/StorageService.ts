import {firebase} from '../../../firebaseConfig';
import StorageServiceInterface from './StorageServiceInterface';
import storage from '@react-native-firebase/storage';

export default class StorageService implements StorageServiceInterface {
  AddUser = (user: any) => {
    firebase.firestore().collection('users').add(user);
  };
  addImage = async (image: any) => {
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    try {
      await storage().ref(filename).putFile(uploadUri);
    } catch (e) {
      console.warn(e);
    }
  };

  getUsers = async (users: any) => {
    await firebase
      .firestore()
      .collection('users')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = doc.data();
          users.push(data);
        });
      });
  };
}
