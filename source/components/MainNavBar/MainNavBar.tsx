import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import strings from '../../resorces/strings';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {textStyles} from '../../resorces/textStyles';
import colors from '../../resorces/colors';
import {SearchBar} from './SearchBar/SearchBar';
import AddUserBtn from '../../resorces/images/mainScreenSvg/addUserBtn.svg';
import SearchBtn from '../../resorces/images/mainScreenSvg/searchBtn.svg';

interface Props {
  search: string;
  onChangeHandle: (search: string) => void;
  handleIndexChange: (index: number) => void;
  index: number;
  navToAddUser: () => void;
  clearSearch: () => void;
  //data: any;
}

interface State {
  showSearch: boolean;
}

export class MainNavBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showSearch: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.showSearch ? (
          <SearchBar
            value={this.props.search}
            onChangeHandle={this.props.onChangeHandle}
            onCancel={this.props.clearSearch}
            goBack={() => this.setState({showSearch: false})}
          />
        ) : (
          <View style={styles.navBar}>
            <Text style={[textStyles.bodyBold]}>
              {strings.mainScreen.learners}
            </Text>
            <View style={styles.buttons}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({showSearch: true});
                }}>
                <SearchBtn height={24} width={24} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.AddUserBtn}
                onPress={this.props.navToAddUser}>
                <AddUserBtn height={24} width={24} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        <SegmentedControlTab
          values={[strings.mainScreen.groups, strings.mainScreen.allLearners]}
          selectedIndex={this.props.index}
          onTabPress={this.props.handleIndexChange}
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          tabTextStyle={[textStyles.body, {color: colors.Shade4}]}
          activeTabTextStyle={[textStyles.body, {color: colors.Accent}]}
          tabsContainerStyle={styles.tabsContainer}
          firstTabStyle={{borderRightWidth: 0}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    backgroundColor: colors.Base1,
  },
  tabStyle: {
    borderColor: colors.Base1,
    borderWidth: 0,
    height: 48,
    color: colors.Shade4,
    borderRadius: 0,
  },
  activeTabStyle: {
    borderWidth: 0,
    borderBottomWidth: 2,
    borderColor: colors.Accent,
    backgroundColor: colors.Base1,
    color: colors.Accent,
    borderRadius: 0,
  },
  tabsContainer: {
    backgroundColor: colors.Base1,
    borderRadius: 0,
  },
  buttons: {
    position: 'absolute',
    right: 16,
    flexDirection: 'row',
  },
  navBar: {
    padding: 16,
    height: 56,
    justifyContent: 'center',
  },
  AddUserBtn: {
    marginLeft: 16,
  },
});
