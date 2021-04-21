import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import colors from '../resorces/colors';

interface Props {
  placeholder: string;
  value: string;
  numberOfLines?: number;
  onChangeHandle: (value: string) => void;
  marginBottom?: number;
}

interface State {
  newValue: string;
}

export class CodeInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      newValue: '',
    };
  }

  render() {
    return (
      <>
        <TextInput
          placeholderTextColor={colors.Shade1}
          value={this.props.value}
          placeholder={this.props.placeholder}
          textAlign={'center'}
          onChangeText={(value) => this.props.onChangeHandle(value)}
          keyboardType={'number-pad'}
          style={[styles.textInput]}
          numberOfLines={this.props.numberOfLines}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    marginTop: 8,
    padding: 8,
    borderRadius: 8,
    height: 64,
    fontSize: 40,
    borderColor: colors.Accent,
    borderWidth: 1,
    fontFamily: 'Raleway-Bold',
    justifyContent: 'center',
  },
});
