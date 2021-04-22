import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../resorces/colors';
import PhoneScreenPresenter, {
  PhoneScreenViewInterface,
} from './PhoneScreenPresenter';
import PhoneAuthorizationImg from '../../resorces/images/PhoneAuthorization.svg';
import {textStyles} from '../../resorces/textStyles';
import strings from '../../resorces/strings';
import {Input} from '../../components/Input';
import {FilledButton} from '../../components/FilledButton';
import {NavigatorParamList} from '../../resorces/NavigatorParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

interface Props {
  presenter: PhoneScreenPresenter;
  navigation: StackNavigationProp<NavigatorParamList, 'login'>;
}

interface State {
  phone: string;
}

export default class PhoneScreenView
  extends React.Component<Props, State>
  implements PhoneScreenViewInterface {
  private readonly presenter: PhoneScreenPresenter;
  constructor(props: Props) {
    super(props);
    this.presenter = this.props.presenter;
    this.presenter.view = this;
    this.state = {
      phone: '',
    };
  }

  setPhone = (phone: string) => {
    this.setState({phone: phone});
  };
  hasErrors = (): boolean => {
    return false;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <PhoneAuthorizationImg
            width={144}
            height={137}
            style={styles.image}
          />
          <Text style={[textStyles.title1, styles.Header]}>
            {strings.phoneAuthorization.logo}
          </Text>
          <Input
            placeholder={strings.phoneAuthorization.phonePlaceholder}
            value={this.state.phone}
            onChangeHandle={(value: string) => this.setPhone(value)}
            marginBottom={0}
            errorType={'empty'}
            hasErrors={this.hasErrors}
            keyboardType={'numeric'}
          />
          <FilledButton
            onPress={() => this.presenter.didPressLoginButton(this.state.phone, this.props.navigation)}
            buttonText={strings.phoneAuthorization.login}
            Style={styles.filledButton}
            textColor={colors.Base1}
            textStyle={textStyles.bodyBold}
          />
        </View>
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
    width: '100%',
    paddingHorizontal: 16,
  },
  image: {
    alignSelf: 'center',
  },
  Header: {
    alignSelf: 'center',
    marginBottom: 48,
  },
  filledButton: {
    width: '100%',
    marginTop: 0,
  },
});
