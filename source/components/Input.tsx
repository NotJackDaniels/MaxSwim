import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {HelperText, TextInput as PaperTextInput} from 'react-native-paper';
import colors from '../resorces/colors';
import inputTheme from '../resorces/inputTheme';
import strings from '../resorces/strings';
import {textStyles} from '../resorces/textStyles';

interface Props {
  placeholder: string;
  heights?: number;
  enableMultiline?: boolean;
  value: string;
  numberOfLines?: number;
  onChangeHandle: (value: string) => void;
  marginBottom?: number;
  errorType: string;
  hasErrors: (errorType: string) => boolean;
  keyboardType?: string;
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
  keyboardType = () => {
    if (this.props.keyboardType && this.props.keyboardType === 'numeric') {
      return 'number-pad';
    }
    return 'default';
  };

  render() {
    return (
      <>
        <PaperTextInput
          keyboardType={this.keyboardType()}
          error={this.props.hasErrors(this.props.errorType)}
          value={this.props.value}
          mode="outlined"
          label={this.props.placeholder}
          style={[
            styles.paperTextInput,
            textStyles.body,
            {marginBottom: this.props.marginBottom},
          ]}
          theme={inputTheme}
          onChangeText={(value) => this.props.onChangeHandle(value)}
          render={(props) => (
            <TextInput
              {...props}
              style={[
                styles.textInput,
                {
                  height: this.props.enableMultiline ? 104 : 48,
                },
              ]}
              multiline={this.props.enableMultiline}
              numberOfLines={this.props.numberOfLines}
            />
          )}
        />
        <HelperText
          style={[styles.helperStyle, textStyles.footNoteSmall]}
          type="error"
          visible={this.props.hasErrors(this.props.errorType)}>
          {strings.addLearner.error}
        </HelperText>
      </>
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
  helperStyle: {
    marginTop: -8,
    color: colors.Error,
    height: 20,
  },
});
