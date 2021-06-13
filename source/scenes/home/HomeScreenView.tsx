import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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

interface user {
  surname: string;
  name: string;
  lessons: number;
}

interface Props {
  presenter: HomeScreenPresenter;
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
}

export default class HomeScreenView
  extends React.Component<Props, State>
  implements HomeScreenViewInterface {
  private readonly presenter: HomeScreenPresenter;

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
          navToAddUser={() => console.warn('ok')}
        />
        {this.state.users ? (
          <SectionListContacts
            sectionListData={users}
            renderItem={(item: any) => this.renderItem(item)}
            renderHeader={this.renderHeader}
            letterTextStyle={styles.letters}
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
    color: colors.Accent,
    fontSize: 11,
  },
});
