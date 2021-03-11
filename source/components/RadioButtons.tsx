import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../resorces/colors';
import lessonsNumber from '../resorces/lessonsNumber';
import {textStyles} from '../resorces/textStyles';

interface Props {
  style: any;
  value: number | string;
  setNewValue: (lessons: number) => void;
}

interface State {
  toggle: boolean;
  borderColor: string;
  key: number;
}

export class RadioButtons extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      toggle: false,
      borderColor: 'grey',
      key: -1,
    };
  }
  render() {
    return lessonsNumber.map((item) => (
      <TouchableOpacity
        key={item.key}
        onPress={() => this.props.setNewValue(item.value)}
        style={[
          styles.button,
          this.props.style,
          this.props.value == item.value
            ? {borderColor: colors.Accent}
            : {borderColor: colors.Shade2},
        ]}>
        <Text style={textStyles.footNote}>{item.label}</Text>
      </TouchableOpacity>
    ));
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    borderWidth: 1,
    padding: 9,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
});
