import React from 'react';
import Dependencies from '../../services/Dependencies';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { cond } from 'react-native-reanimated';
import colors from '../../resorces/colors';
import {NavigatorParamList} from '../../resorces/NavigatorParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import { showMessage, hideMessage } from "react-native-flash-message";
import strings from '../../resorces/strings';

export interface CodeScreenViewInterface {
  setCode: (code:string) => void;
  setBorderColor: (color:string) => void;
}

export default class CodeScreenPresenter{
  view?: CodeScreenViewInterface;
  private dependencies: Dependencies;
  private confirmation: Promise<FirebaseAuthTypes.ConfirmationResult>| undefined = undefined;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }

  didMount(conf: Promise<FirebaseAuthTypes.ConfirmationResult>){
    this.confirmation = conf;
  }

  async didPressSendAgainButton(phone: string) {
    const confirmation = this.dependencies.authService.getConfirmation(phone);
    if (confirmation){
      showMessage({
        message: strings.flashMessages.sendCodeAgain,
        color: colors.Base1,
        backgroundColor: colors.Accent
      });
    }
  }

  setCode = (code: string, navigation: StackNavigationProp<NavigatorParamList, 'code'>) => {
    this.view?.setCode(code);
    this.confirmCode(code,navigation)
  }

  private async confirmCode(code: string, navigation: StackNavigationProp<NavigatorParamList, 'code'>){
    if (code.length === 6)
    {
      const checked = await this.dependencies.authService.getConfirmation(code);
      if (checked)
      {
        navigation.navigate('home');
      }

    }
    if(code.length === 6){
      this.view?.setBorderColor(colors.Error)
    } else {
      this.view?.setBorderColor(colors.Accent)
    }
  }
}
