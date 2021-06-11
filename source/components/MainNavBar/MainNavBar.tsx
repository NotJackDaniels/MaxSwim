import React from 'react';
import {StyleSheet, View} from 'react-native';
import strings from '../../resorces/strings';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {textStyles} from '../../resorces/textStyles';
import colors from '../../resorces/colors';

interface Props {
  search: string;
  onChangeHandle: (text: string) => void;
  handleIndexChange: (index: number) => void;
  index: number;
  data: any;
}

export class MainNavBar extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
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
});
