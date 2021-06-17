import { StackNavigationProp } from '@react-navigation/stack';
import Animated from 'react-native-reanimated';
import { NavigatorParamList } from '../../resorces/NavigatorParamList';
import Dependencies from '../../services/Dependencies';
var filter = require('lodash.filter');
import {Linking} from 'react-native'

export interface HomeScreenViewInterface {
  updateCounterText(text: string): void;
  setUsers: (users: any) => void;
  clearSearch(): void;
  setFilteredUsers: (users: any) => void;
  setSearchValue: (value: string) => void;
  setScrollY: (translateY: any) => void;
}

export default class HomeScreenPresenter {
  view?: HomeScreenViewInterface;

  private counter: number = 0;
  private dependencies: Dependencies;
  private scrollY = new Animated.Value(0);
  private translateY = this.scrollY.interpolate({
    inputRange: [0, 45],
    outputRange: [0, 45],
  });

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }

  didMount = () => {
    this.getUsers();
  };

  transformHeader = (e: any) => {
    this.scrollY.setValue(e.nativeEvent.contentOffset.Y)
    this.view?.setScrollY(this.scrollY);
  }

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

  dialCall = (number: '') => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
  };

  async navigateToAddUser(navigation: StackNavigationProp<NavigatorParamList, 'home'>) {
    if (navigation){
      navigation.navigate('addLearner');
    }
  }

  isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: {
    layoutMeasurement: any;
    contentOffset: any;
    contentSize: any;
  }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
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
  };
}
