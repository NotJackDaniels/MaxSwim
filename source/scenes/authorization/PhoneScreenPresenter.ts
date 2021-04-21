import Dependencies from '../../services/Dependencies';

export interface PhoneScreenViewInterface {
  navigateToCodeScreen(): void;
}

export default class PhoneScreenPresenter {
  view?: PhoneScreenViewInterface;
  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }

  didPressLoginButton = () => {
    this.view?.navigateToCodeScreen();
  };
}
