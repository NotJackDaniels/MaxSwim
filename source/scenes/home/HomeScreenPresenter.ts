import Dependencies from '../../services/Dependencies';
var filter = require('lodash.filter');

export interface HomeScreenViewInterface {
  updateCounterText(text: string): void;
  setUsers: (users: any) => void;
  clearSearch(): void;
  setFilteredUsers: (users: any) => void;
  setSearchValue: (value: string) => void;
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
    if (users) {
      console.warn(users);
      this.view?.setUsers(users);
    }
  }

  ClearSearch = () => {
    this.view?.clearSearch();
  };

  contains = (name: string, surname: string, query: string) => {
    if (name.includes(query) || surname.includes(query)) {
      console.warn(name, query);
      return true;
    }
    return false;
  };

  filterData = (value: string, users: any) => {
    this.view?.setSearchValue(value);
    const formattedQuery = value;
    const data = filter(users, (user: any) => {
      return this.contains(user.name, user.surname, formattedQuery);
    });
    this.view?.setFilteredUsers(data);
    //this.setState({ data, query: text })
  };
}
