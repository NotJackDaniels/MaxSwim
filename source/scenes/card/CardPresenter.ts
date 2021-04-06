import Dependencies from '../../services/Dependencies';

export interface CardViewInterface {}

export default class CardPresenter {
  view?: CardViewInterface;

  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }
}
