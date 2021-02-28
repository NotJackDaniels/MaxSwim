import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import colors from '../resorces/colors';
import strings from '../resorces/strings';
import {textStyles} from '../resorces/textStyles';
import DeleteIcon from '../../source/resorces/images/deleteIcon.svg';

interface Props {
  telephone: string;
  name: string;
  isMain: boolean;
}

export class TelephoneInfo extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.viewWithBorder}>
        <View>
          <View style={styles.rowView}>
            <Text style={(textStyles.footNote, styles.telephoneName)}>
              {this.props.name}
            </Text>
            <Text style={[styles.telephoneType, textStyles.footNoteBold]}>
              {this.props.isMain
                ? strings.addLearner.main
                : strings.addLearner.active}
            </Text>
          </View>
          <Text style={textStyles.body}>{this.props.telephone}</Text>
        </View>
        <TouchableOpacity style={styles.deleteButton}>
          <DeleteIcon height={12} width={12} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  telephoneName: {
    color: colors.Shade4,
  },
  viewWithBorder: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 5,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteButton: {
    position: 'absolute',
    right: 0,
  },
  telephoneType: {
    color: colors.Success,
    marginLeft: 8,
  },
});
