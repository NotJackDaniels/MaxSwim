import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import colors from '../resorces/colors';

interface Props {
  onPress: () => void;
  buttonText: string;
  style: any;
}

interface State {
  toggle: boolean;
  borderColor: string;
}

export class ToggleButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      toggle: true,
      borderColor: colors.Shade2,
    };
  }
  pressed = (onPress: () => void) => {};
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.pressed(this.props.onPress)}
        style={[
          styles.button,
          this.props.style,
          {borderColor: this.state.borderColor},
        ]}>
        <Text>{this.props.buttonText}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    borderWidth: 1,
    padding: 9,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
});
