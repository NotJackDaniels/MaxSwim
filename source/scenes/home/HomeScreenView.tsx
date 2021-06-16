import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {ContactView} from '../../components/Contact';
import colors from '../../resorces/colors';
import {textStyles} from '../../resorces/textStyles';
import HomeScreenPresenter, {
  HomeScreenViewInterface,
} from './HomeScreenPresenter';
//var SectionListContacts = require('react-native-sectionlist-contacts');
import SectionListContacts from '../../components/sectionsList/SectionListContacts';
import {MainNavBar} from '../../components/MainNavBar/MainNavBar';
import {BottomNavBar} from '../../components/bottomNavBar/BottomNavBar';
import strings from '../../resorces/strings';
import Animated from 'react-native-reanimated';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorParamList } from '../../resorces/NavigatorParamList';

interface user {
  surname: string;
  name: string;
  lessons: number;
}

interface Props {
  presenter: HomeScreenPresenter;
  navigation: StackNavigationProp<NavigatorParamList, 'home'>;
}

interface State {
  counterText: string;
  users: any | null;
  alphabet: string | null;
  changeLetter: boolean;
  topNavIndex: number;
  bottomNavIndex: number;
  search: string;
  filteredUsers: any | null;
  showShadowTop: boolean;
  translateY: any;
}

export default class HomeScreenView
  extends React.Component<Props, State>
  implements HomeScreenViewInterface {
  private readonly presenter: HomeScreenPresenter;
  private scrollY = new Animated.Value(0);

  constructor(props: Props) {
    super(props);

    this.presenter = this.props.presenter;
    this.presenter.view = this;

    this.state = {
      counterText: '',
      users: null,
      alphabet: null,
      changeLetter: false,
      topNavIndex: 1,
      search: '',
      bottomNavIndex: 3,
      filteredUsers: null,
      showShadowTop: false,
      translateY: 0,
    };
  }

  clearSearch() {
    this.setState({search: ''});
  }

  componentDidMount() {
    this.presenter.didMount();
  }

  updateCounterText(text: string) {
    this.setState({counterText: text});
  }

  setUsers(users: any) {
    this.setState({users: users, filteredUsers: users});
  }

  setScrollY = (translateY: any) => {
    this.setState({translateY: translateY})
  }
  renderItem(item: any) {
    return (
      <ContactView
        surname={item.surname}
        name={item.name}
        lessons={item.lessons}
      />
    );
  }

  renderHeader = (params: any) => {
    return (
      <Text style={[textStyles.title2, styles.alphabet]}>{params.key}</Text>
    );
  };

  handleIndexChange = (index: number) => {
    this.setState({
      topNavIndex: index,
    });
  };

  selectBottomNavBarIndex = (index: number) => {
    this.setState({
      bottomNavIndex: index,
    });
  };

  setSearchValue = (value: string) => {
    this.setState({search: value});
  };

  setFilteredUsers = (users: any) => {
    this.setState({filteredUsers: users});
  };

  render() {
    const users = this.state.filteredUsers;
    return (
      <View style={styles.container}>
        <MainNavBar
          handleIndexChange={this.handleIndexChange}
          index={this.state.topNavIndex}
          search={this.state.search}
          onChangeHandle={(value: string) =>
            this.presenter.filterData(value, this.state.users)
          }
          clearSearch={this.presenter.ClearSearch}
          navToAddUser={() => this.presenter.navigateToAddUser(this.props.navigation)}
          traslateY={this.state.translateY}
        />
        {this.state.users ? (
          <SectionListContacts
            sectionListData={users}
            renderItem={(item: any) => this.renderItem(item)}
            renderHeader={this.renderHeader}
            letterTextStyle={styles.letters}
            onScroll={(e:any) => {
              this.presenter.transformHeader(e);
            }}
          />
        ) : (
          <Text>{strings.mainScreen.noUsers}</Text>
        )}
        <BottomNavBar
          selectedIndex={this.state.bottomNavIndex}
          onPress={this.selectBottomNavBarIndex}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
  },
  alphabet: {
    marginLeft: 16,
  },
  letters: {
    top: Platform.OS === 'ios' ? -72 : 50,
    color: colors.Accent,
    fontSize: 11,
  },
});
