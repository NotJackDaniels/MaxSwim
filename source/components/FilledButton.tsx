import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import colors from '../resorces/colors';
import {textStyles} from '../resorces/textStyles';

interface Props {
  onPress: () => void;
  buttonText: string;
  Style?: any;
}

export class FilledButton extends React.Component<Props> {
  render() {
    return (
      <TouchableHighlight
        onPress={() => this.props.onPress()}
        style={[styles.button, this.props.Style]}>
        <Text style={(textStyles.bodyBold, styles.buttonText)}>
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
    width: '100%',
    marginVertical: 32,
    height: 48,
    alignItems: 'center',
    backgroundColor: colors.Accent,
  },
  buttonText: {
    color: 'white',
  },
});
