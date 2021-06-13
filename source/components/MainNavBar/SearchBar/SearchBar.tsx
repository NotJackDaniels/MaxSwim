import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import colors from '../../../resorces/colors';
import {textStyles} from '../../../resorces/textStyles';
import BackBtn from '../../../resorces/images/mainScreenSvg/backBtn.svg';
import CancelBtn from '../../../resorces/images/mainScreenSvg/cancelBtn.svg';
import strings from '../../../resorces/strings';

interface Props {
  value: string;
  onChangeHandle: (value: string) => void;
  onCancel: () => void;
  goBack: () => void;
}

export class SearchBar extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.goBackBtn} onPress={this.props.goBack}>
          <BackBtn height={24} width={24} />
        </TouchableOpacity>
        <TextInput
          placeholderTextColor={colors.Shade4}
          placeholder={strings.mainScreen.search}
          value={this.props.value}
          onChangeText={(value) => this.props.onChangeHandle(value)}
          style={[styles.textInput, textStyles.body]}
        />
        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={this.props.onCancel}>
          <CancelBtn height={24} width={24} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.Base1,
  },
  textInput: {
    backgroundColor: colors.Base1,
    width: 100,
    margin: 0,
    borderWidth: 0,
    padding: 0,
    color: colors.Shade4,
  },
  cancelBtn: {
    position: 'absolute',
    right: 16,
  },
  goBackBtn: {
    marginRight: 16,
  },
});
