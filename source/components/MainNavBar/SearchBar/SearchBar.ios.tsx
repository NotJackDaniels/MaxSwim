import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import colors from '../../../resorces/colors';
import {textStyles} from '../../../resorces/textStyles';
import Search from '../../../resorces/images/mainScreenSvg/searchIOS.svg';
import strings from '../../../resorces/strings';


interface Props {
  value: string;
  onChangeHandle: (value: string) => void;
}

export class SearchBar extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Search height={20} width={20} />
        <TextInput
          placeholderTextColor={colors.Shade4}
          placeholder={strings.mainScreen.search}
          value={this.props.value}
          onChangeText={(value) => this.props.onChangeHandle(value)}
          style={[styles.textInput, textStyles.body]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 32,
    marginHorizontal: 16,
    backgroundColor: colors.Shade1,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  textInput: {
    backgroundColor: colors.Shade1,
    height: '100%',
    flex: 1,
    width: '100%',
    margin: 0,
    borderWidth: 0,
    padding: 0,
    color: colors.Shade4,
    marginLeft: 8,
  },
});
