import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import strings from '../../resorces/strings';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {textStyles} from '../../resorces/textStyles';
import colors from '../../resorces/colors';
import {SearchBar} from './SearchBar/SearchBar.ios';

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
      <>
      <View style={styles.topNav} />
        <View style={styles.container}>
          <SearchBar
            value={this.props.search}
            onChangeHandle={this.props.onChangeHandle}
          />
          <SegmentedControlTab
            values={[strings.mainScreen.groups, strings.mainScreen.allLearners]}
            selectedIndex={this.props.index}
            onTabPress={this.props.handleIndexChange}
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            tabTextStyle={[textStyles.body, {color: colors.Base2}]}
            activeTabTextStyle={[textStyles.body, {color: colors.Base1}]}
            tabsContainerStyle={styles.tabsContainer}
            firstTabStyle={{borderRightWidth: 0}}
            borderRadius={8}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    backgroundColor: colors.Base1,
    justifyContent: 'center',
  },
  header: {
    alignSelf: 'center',
  },
  tabStyle: {
    borderColor: colors.Base1,
    borderWidth: 0,
    height: 32,
    borderRadius: 8,
    backgroundColor: colors.Shade1,
  },
  activeTabStyle: {
    borderWidth: 0,
    backgroundColor: colors.Accent,
    borderRadius: 8,
  },
  tabsContainer: {
    backgroundColor: colors.Shade1,
    marginHorizontal: 16,
    borderRadius: 8,
    position: 'relative',
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
  topNav: {
    height: 44,
  }
});
