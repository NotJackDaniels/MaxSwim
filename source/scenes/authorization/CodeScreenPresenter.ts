import React from 'react';
import Dependencies from '../../services/Dependencies';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { cond } from 'react-native-reanimated';
import colors from '../../resorces/colors';
import {NavigatorParamList} from '../../resorces/NavigatorParamList';
import {StackNavigationProp} from '@react-navigation/stack';

export interface CodeScreenViewInterface {
  setCode: (code:string) => void;
  setBorderColor: (color:string) => void;
}

export default class CodeScreenPresenter{
  view?: CodeScreenViewInterface;
  private dependencies: Dependencies;
  private confirmation: FirebaseAuthTypes.ConfirmationResult | undefined = undefined;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }

  didMount(conf: FirebaseAuthTypes.ConfirmationResult){
    this.confirmation = conf;
  }

  setCode = (code: string, navigation: StackNavigationProp<NavigatorParamList, 'code'>) => {
    this.view?.setCode(code);
    this.confirmCode(code,navigation)
  }

  private async confirmCode(code: string, navigation: StackNavigationProp<NavigatorParamList, 'code'>){
    try{
      if(code.length === 6)
      {
        const response = await this.confirmation?.confirm(code);
        if (response){
          console.warn('1')
          navigation.navigate('home');
        }
      }
      
    } catch(e) {
      console.warn(JSON.stringify(e));
    }
    if(code.length === 6){
      this.view?.setBorderColor(colors.Error)
    } else {
      this.view?.setBorderColor(colors.Accent)
    }
  }
}
