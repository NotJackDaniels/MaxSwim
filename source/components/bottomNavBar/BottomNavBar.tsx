import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {BottomNavButtons} from './NavBarButtons';

interface Props {
  selectedIndex: number;
  onPress: (index: number) => void;
}

export class BottomNavBar extends React.Component<Props> {
  render() {
    return (
      <View style={styles.buttons}>
        <BottomNavButtons
          value={this.props.selectedIndex}
          setNewValue={this.props.onPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttons: {
    position: 'absolute',
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 83 : 56,
    bottom: 0,
  },
});
