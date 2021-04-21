import Dependencies from '../../services/Dependencies';

export interface CodeScreenViewInterface {}

export default class CodeScreenPresenter {
  view?: CodeScreenViewInterface;
  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }
}
