import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import colors from '../../resorces/colors';
import {BottomNavButtons} from './NavBarButtons';

interface Props {
  selectedIndex: number;
  onPress: (index: number) => void;
}

export class BottomNavBar extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <BottomNavButtons
          value={this.props.selectedIndex}
          setNewValue={this.props.onPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 83 : 56,
    backgroundColor: colors.Base1,
    alignItems: 'flex-start',
    bottom: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
