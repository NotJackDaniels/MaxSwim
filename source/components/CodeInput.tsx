import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import colors from '../resorces/colors';
import { textStyles } from '../resorces/textStyles';

interface Props {
  placeholder: string;
  value: string;
  numberOfLines?: number;
  onChangeHandle: (value: string) => void;
  marginBottom?: number;
  borderColor:string,
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
          style={[styles.textInput,textStyles.title1, {borderColor: this.props.borderColor}]}
          numberOfLines={this.props.numberOfLines}
          maxLength={6}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    marginTop: 16,
    borderRadius: 8,
    height: 64,
    fontSize: 40,
    borderWidth: 1,
    fontFamily: 'Raleway-Bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
