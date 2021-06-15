import Calendar from '../../resorces/images/mainScreenSvg/calendar.svg';
import Notebook from '../../resorces/images/mainScreenSvg/notebook.svg';
import Notes from '../../resorces/images/mainScreenSvg/notes.svg';
import Users from '../../resorces/images/mainScreenSvg/users.svg';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import colors from '../../resorces/colors';
import {textStyles} from '../../resorces/textStyles';

const buttons: {
  key: number;
  svg: any;
  label: string;
}[] = [
  {key: 0, svg: Calendar, label: 'Сегодня'},
  {key: 1, svg: Notebook, label: 'Журнал'},
  {key: 2, svg: Notes, label: 'Заметки'},
  {key: 3, svg: Users, label: 'Ученики'},
];

interface Props {
  value: number | string;
  setNewValue: (lessons: number) => void;
}

interface State {
  key: number;
}

export class BottomNavButtons extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      key: -1,
    };
  }
  render() {
    return buttons.map((item) => (
      <TouchableOpacity
        key={item.key}
        onPress={() => this.props.setNewValue(item.key)}
        style={styles.button}>
        <item.svg height={20} width={20} />
        <Text style={[textStyles.footNoteSmall, styles.text]}>
          {item.label}
        </Text>
      </TouchableOpacity>
    ));
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 4,
    marginTop: 8,
  },
  text: {
    color: colors.Shade4,
  },
});
