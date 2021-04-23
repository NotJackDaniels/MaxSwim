import React from 'react';
import {NavigatorParamList} from '../../resorces/NavigatorParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import CodeScreenPresenter, {
  CodeScreenViewInterface,
} from './CodeScreenPresenter';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../resorces/colors';
import {textStyles} from '../../resorces/textStyles';
import strings from '../../resorces/strings';
import {CodeInput} from '../../components/CodeInput';
import {FilledButton} from '../../components/FilledButton';
import { RouteProp } from '@react-navigation/native';
import FlashMessage from "react-native-flash-message";

interface Props {
  presenter: CodeScreenPresenter;
  navigation: StackNavigationProp<NavigatorParamList, 'code'>;
  route: RouteProp<NavigatorParamList, 'code'>
}

interface State {
  code: string;
  borderColor: string;
}

export default class CodeScreenView
  extends React.Component<Props, State>
  implements CodeScreenViewInterface {
  private readonly presenter: CodeScreenPresenter;
  constructor(props: Props) {
    super(props);
    this.presenter = this.props.presenter;
    this.presenter.view = this;
    this.state = {
      code: '',
      borderColor: colors.Accent,
    };
  }

  componentDidMount(){
     this.presenter.didMount(this.props.route.params?.confirmation)
  }

  setCode = (code: string) => {
    this.setState({code: code});
  };

  setBorderColor = (color: string) => {
    this.setState({borderColor: color})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[textStyles.title3, styles.selfAlign]}>
          {strings.phoneAuthorization.code}
        </Text>
        <View style={styles.content}>
          <CodeInput
            placeholder={strings.phoneAuthorization.codePlaceholder}
            value={this.state.code}
            onChangeHandle={(value: string) => this.presenter.setCode(value,this.props.navigation)}
            marginBottom={0}
            borderColor={this.state.borderColor}
          />
          <FilledButton
            onPress={() =>  this.props.presenter.didPressSendAgainButton(this.props.route.params.phone)}
            buttonText={strings.phoneAuthorization.sendCodeAgain}
            Style={styles.filledButton}
            textColor={colors.Accent}
            textStyle={textStyles.body}
          />
        </View>
        <FlashMessage ref="myLocalFlashMessage" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Base1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginBottom: 24,
    justifyContent: 'center',
    width: 216,
    paddingHorizontal: 16,
    textAlign: 'center',
  },
  filledButton: {
    width: '100%',
    backgroundColor: colors.Base1,
    marginTop: 0,
  },
  selfAlign: {
    alignSelf: 'center',
  }
});
