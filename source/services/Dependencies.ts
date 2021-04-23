import StorageServiceInterface from './StorageService/StorageServiceInterface';
import StorageService from './StorageService/StorageService';
import AuthServiceInterface from './AuthService/AuthServiceInterface';
import AuthService from './AuthService/AuthService';

export default class Dependencies {
  readonly storageService: StorageServiceInterface;
  readonly authService: AuthServiceInterface;

  constructor(storageService: StorageServiceInterface, authService: AuthServiceInterface) {
    this.storageService = storageService;
    this.authService = authService;
  }

  static createDefault(): Dependencies {
    const storageService = new StorageService();
    const authService = new AuthService();
    return new Dependencies(storageService, authService);
  }
}
