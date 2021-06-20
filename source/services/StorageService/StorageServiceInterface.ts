export default interface StorageServiceInterface {
  AddUser: (user: any) => void;
  addImage: (image: any) => Promise<any>;
  getUsers: (users: any) => void;
}
