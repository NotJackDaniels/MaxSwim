import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import strings from '../../resorces/strings';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {textStyles} from '../../resorces/textStyles';
import colors from '../../resorces/colors';
import {SearchBar} from './SearchBar/SearchBar.ios';
import Animated from 'react-native-reanimated';
import AddUserBtn from '../../resorces/images/mainScreenSvg/addUserBtn.svg';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorParamList } from '../../resorces/NavigatorParamList';

interface Props {
  search: string;
  onChangeHandle: (search: string) => void;
  handleIndexChange: (index: number) => void;
  index: number;
  navToAddUser: () => void;
  clearSearch: () => void;
  traslateY: number;
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
          <Animated.View style={[styles.header, {transform: [{translateY: this.props.traslateY}]}]}>
            <Text style={[textStyles.bodyBold]}>
                {strings.mainScreen.learners}
            </Text>
            <TouchableOpacity
                style={styles.AddUserBtn}
                onPress={this.props.navToAddUser}>
                <AddUserBtn height={24} width={24} />
            </TouchableOpacity>
          </Animated.View>
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
    //height: 100,
    width: '100%',
    backgroundColor: colors.Base1,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    height: 44,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 16,
    justifyContent: 'center',
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
      position: 'absolute',
    width: 56,
    height: '100%',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topNav: {
    height: 44,
  },
});
