import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../resorces/colors';
import {textStyles} from '../resorces/textStyles';

interface Props {
  onPress: () => void;
  buttonText: string;
  Style?: any;
  textColor: string;
}

export class CardButton extends React.Component<Props> {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.onPress()}
        style={[styles.button, this.props.Style]}>
        <Text style={[textStyles.footNoteBold, {color: this.props.textColor}]}>
          {this.props.buttonText}
        </Text>
      </TouchableOpacity>
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
