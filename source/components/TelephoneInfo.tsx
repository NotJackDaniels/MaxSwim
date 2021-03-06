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
  onPress?: (telephone: any) => void;
  removable: boolean;
  telephoneTypeLocationRight?: boolean;
}

export class TelephoneInfo extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.viewWithBorder}>
        <View style={styles.content}>
          <View style={styles.rowView}>
            <Text style={(textStyles.footNote, styles.telephoneName)}>
              {this.props.name}
            </Text>
            <Text
              style={[
                styles.telephoneType,
                textStyles.footNoteBold,
                this.props.telephoneTypeLocationRight ? styles.rightPos : null,
              ]}>
              {this.props.isMain
                ? strings.addLearner.main
                : strings.addLearner.active}
            </Text>
          </View>
          <Text style={textStyles.body}>{this.props.telephone}</Text>
        </View>
        {this.props.removable && this.props.onPress ? (
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={this.props.onPress}>
            <DeleteIcon height={12} width={12} />
          </TouchableOpacity>
        ) : null}
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
    width: '100%',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  content: {
    width: '100%',
  },
  deleteButton: {
    position: 'absolute',
    right: 0,
  },
  telephoneType: {
    color: colors.Success,
    marginLeft: 8,
  },
  rightPos: {
    position: 'absolute',
    right: 0,
  },
});
