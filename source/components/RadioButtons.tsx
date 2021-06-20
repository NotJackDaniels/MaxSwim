import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../resorces/colors';
import {textStyles} from '../resorces/textStyles';

interface Props {
  value: number | string;
  setNewValue: (lessons: number) => void;
  lessonsNumber?: any;
  addLessons?: any;
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
    let renderLessons;
    if (this.props.addLessons) {
      renderLessons = this.props.addLessons;
    } else {
      renderLessons = this.props.lessonsNumber;
    }
    return renderLessons.map((item: any) => (
      <TouchableOpacity
        key={item.key}
        onPress={() => this.props.setNewValue(item.value)}
        style={[
          styles.button,
          item.value === 4 ? {marginLeft: 16} : {marginLeft: 8},
          this.props.value === item.value
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
    height: 32,
  },
});
