import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Ripple from 'react-native-material-ripple';
import colors from '../resorces/colors';

interface Props {
  onPress: () => void;
  buttonText: string;
  Style?: any;
}

export class FilledButton extends React.Component<Props> {
  render() {
    return (
      <Ripple
        onPress={() => this.props.onPress()}
        style={[styles.button, this.props.Style]}>
        <Text style={styles.text}>{this.props.buttonText}</Text>
      </Ripple>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    padding: 5,
    borderRadius: 7,
    width: '100%',
    marginTop: 8,
    marginBottom: 16,
    height: 50,
    alignItems: 'center',
    backgroundColor: colors.Accent,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
