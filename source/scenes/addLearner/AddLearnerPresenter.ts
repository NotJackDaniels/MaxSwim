import Dependencies from "../../services/Dependencies";
import strings from "../../resorces/strings";

export interface AddLearnerScreenViewInterface {}

export default class AddLearnerScreenPresenter {
  view?: AddLearnerScreenViewInterface;

  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }
}
