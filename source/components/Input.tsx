import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import colors from '../resorces/colors';

interface Props {
  placeholder: string;
  heights?: number;
  enableMultiline?: boolean;
  value?: string;
  numberOfLines?: number;
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
  setNewValue = (e: string) => {
    this.setState({newValue: e});
  };
  render() {
    return (
      <TextInput
        mode="outlined"
        label={this.props.placeholder}
        placeholder={this.props.placeholder}
        style={styles.input}
        placeholderTextColor={colors.Shade4}
        multiline={this.props.enableMultiline}
        numberOfLines={this.props.numberOfLines}
        theme={{
          colors: {
            primary: colors.Accent,
          },
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
    backgroundColor: 'white',
  },
});
