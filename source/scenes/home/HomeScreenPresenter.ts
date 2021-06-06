import Dependencies from '../../services/Dependencies';

export interface HomeScreenViewInterface {
  updateCounterText(text: string): void;
  setUsers: (users: any) => void;
}

export default class HomeScreenPresenter {
  view?: HomeScreenViewInterface;

  private counter: number = 0;
  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }

  didMount = () => {
    this.getUsers();
  };

  async getUsers() {
    const users: any = [];
    await this.dependencies.storageService.getUsers(users);
    this.view?.setUsers(users);
  }
}
