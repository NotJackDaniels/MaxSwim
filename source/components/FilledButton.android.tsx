import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Ripple from 'react-native-material-ripple';
import colors from '../resorces/colors';

interface Props {
  onPress: () => (void | Promise<void>);
  buttonText: string;
  Style?: any;
  textColor: string;
  textStyle: any;
}

export class FilledButton extends React.Component<Props> {
  render() {
    return (
      <Ripple
        onPress={this.props.onPress}
        style={[styles.button, this.props.Style]}>
        <Text style={[this.props.textStyle, {color: this.props.textColor}]}>
          {this.props.buttonText}
        </Text>
      </Ripple>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 40,
    marginTop: 16,
    height: 48,
    alignItems: 'center',
    backgroundColor: colors.Accent,
  },
});
