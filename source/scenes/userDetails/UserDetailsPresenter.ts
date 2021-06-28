import Dependencies from '../../services/Dependencies';
import moment from 'moment';
import 'moment/locale/ru';

export interface UserDetailsScreenInterface {
  setDate: (date: any) => void;
}

export default class UserDetailsPresenter {
  view?: UserDetailsScreenInterface;
  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }

  getDependencies() {
    return this.dependencies;
  }

  setDate = (date: any) => {
    const parseDate = moment(date * 1000)
      .locale('ru')
      .format('DD MMMM YYYY');
    this.view?.setDate(parseDate);
  };

  addSubscription = () => {};
  //didMount = () => {};
}
