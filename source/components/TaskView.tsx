import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  name: string;
  description: string;
}

export class Input extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.name}</Text>
        <Text>{this.props.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
  },
});
