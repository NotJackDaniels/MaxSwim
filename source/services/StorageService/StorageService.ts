import {UsersRef} from '../../../firebaseConfig';
import StorageServiceInterface from './StorageServiceInterface';

export default class StorageService implements StorageServiceInterface {
  AddUser = (user: any) => {
    UsersRef.add(user);
  };
}
