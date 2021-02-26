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
      toggle: false,
      borderColor: 'grey',
    };
  }
  componentDidMount() {
    this.setState({toggle: false});
  }
  pressed = (onPress: () => void, toggle: boolean) => {
    onPress();
    this.setState({toggle: !toggle});
    if (toggle) {
      this.setState({borderColor: colors.Accent});
    } else {
      this.setState({borderColor: 'grey'});
    }
  };
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.pressed(this.props.onPress, this.state.toggle)}
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
    paddingHorizontal: 7,
  },
});
