import Dependencies from '../../services/Dependencies';

export interface AddLearnerScreenViewInterface {}

export default class AddLearnerScreenPresenter {
  view?: AddLearnerScreenViewInterface;

  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }

  AddPhone = (name: string, number: string, isMain: boolean) => {
    
  }

  AddUser = (user: any) => {
    this.dependencies.storageService.AddUser(user);
  };
}
