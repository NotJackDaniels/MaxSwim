import Dependencies from "../../services/Dependencies";
import strings from "../../resorces/strings";

export interface HomeScreenViewInterface {
  updateCounterText(text: string): void
}

export default class HomeScreenPresenter {
  view?: HomeScreenViewInterface

  private counter: number = 0
  private dependencies: Dependencies

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies
  }

  didMount = () => {
    this.updateCounter()
  }

  counterAddOne = () => {
    this.counter += 1
    this.updateCounter()
  }

  private updateCounter() {
    this.view?.updateCounterText(strings.home.counterText + this.counter)
  }
}
