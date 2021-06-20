import {firebase} from '../../../firebaseConfig';
import StorageServiceInterface from './StorageServiceInterface';
import storage from '@react-native-firebase/storage';

export default class StorageService implements StorageServiceInterface {
  AddUser = (user: any) => {
    firebase.firestore().collection('users').add(user);
  };

  addImage = async (image: any): Promise<any> => {
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;
    const storageRef = storage().ref(`photos/${filename}`);

    try {
      await storageRef.putFile(uploadUri);
      const url = await storageRef.getDownloadURL();
      return url;
    } catch (e) {
      console.warn(e);
      return null;
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
