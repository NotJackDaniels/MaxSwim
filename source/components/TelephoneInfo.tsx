import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import colors from '../resorces/colors';
import strings from '../resorces/strings';
import {textStyles} from '../resorces/textStyles';

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
      <View style={styles.rowView}>
        <View>
          <Text style={(textStyles.footNote, styles.telephoneName)}>
            {this.props.name}
          </Text>
          <Text style={textStyles.body}>{this.props.telephone}</Text>
        </View>
        <Text style={[styles.telephoneType, textStyles.footNoteBold]}>
          {this.props.isMain
            ? strings.addLearner.main
            : strings.addLearner.active}
        </Text>
        <TouchableOpacity style={styles.deleteButton}>
          <Image source={require('../../source/resorces/images/Group.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  telephoneName: {
    color: colors.Shade4,
  },
  rowView: {
    flexDirection: 'row',
  },
  deleteButton: {
    position: 'absolute',
    alignSelf: 'center',
    right: 0,
    marginRight: 7,
  },
  telephoneType: {
    color: colors.Success,
  },
});
