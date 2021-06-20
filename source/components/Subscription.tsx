import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../resorces/colors';
import {textStyles} from '../resorces/textStyles';

interface Props {
  lessons: number;
  date: any;
}

export class Subscription extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={textStyles.body}>{this.props.lessons}</Text>
        <Text style={[textStyles.footNote, styles.dateColor]}>
          {this.props.date}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    padding: 16,
  },
  dateColor: {
    color: colors.Shade4,
  },
});
