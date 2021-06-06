export default interface StorageServiceInterface {
  AddUser: (user: any) => void;
  addImage: (image: any) => void;
  getUsers: (users: any) => void;
}
