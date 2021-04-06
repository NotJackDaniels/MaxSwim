import StorageServiceInterface from './StorageService/StorageServiceInterface';
import StorageService from './StorageService/StorageService';

export default class Dependencies {
  readonly storageService: StorageServiceInterface;

  constructor(storageService: StorageServiceInterface) {
    this.storageService = storageService;
  }

  static createDefault(): Dependencies {
    const storageService = new StorageService();
    return new Dependencies(storageService);
  }
}
