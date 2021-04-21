import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import colors from '../resorces/colors';

interface Props {
  onPress: () => void;
  buttonText: string;
  Style?: any;
  textColor: string;
  textStyle: any;
}

interface State {
  isPressed: boolean;
}

export class FilledButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isPressed: false,
    };
  }

  setPressed = (newValue: boolean) => {
    this.setState({isPressed: newValue});
  };

  render() {
    return (
      <TouchableHighlight
        onPress={() => this.props.onPress()}
        style={[styles.button, this.props.Style]}
        underlayColor={colors.AccentLight}
        onHideUnderlay={() => this.setPressed(false)}
        onShowUnderlay={() => this.setPressed(true)}>
        <Text style={[this.props.textStyle, {color: this.props.textColor}]}>
          {this.props.buttonText}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 40,
    height: 48,
    alignItems: 'center',
    backgroundColor: colors.Accent,
  },
});
