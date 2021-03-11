import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {TextInput as PaperTextInput} from 'react-native-paper';
import inputTheme from '../resorces/inputTheme';
import {textStyles} from '../resorces/textStyles';

interface Props {
  placeholder: string;
  heights?: number;
  enableMultiline?: boolean;
  value: string;
  numberOfLines?: number;
  onChangeHandle: (value: string) => void;
}

interface State {
  newValue: string;
}

export class Input extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      newValue: '',
    };
  }

  render() {
    return (
      <PaperTextInput
        value={this.props.value}
        mode="outlined"
        label={this.props.placeholder}
        style={[styles.paperTextInput, textStyles.body]}
        theme={inputTheme}
        onChangeText={(value) => this.props.onChangeHandle(value)}
        render={(props) => (
          <TextInput
            {...props}
            style={[
              styles.textInput,
              {height: this.props.enableMultiline ? 104 : 48},
            ]}
            multiline={this.props.enableMultiline}
            numberOfLines={this.props.numberOfLines}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  paperTextInput: {
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    height: 48,
  },
  textInput: {
    textAlignVertical: 'top',
    padding: 16,
  },
});
