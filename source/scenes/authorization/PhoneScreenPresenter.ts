import Dependencies from '../../services/Dependencies';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import {NavigatorParamList} from '../../resorces/NavigatorParamList';
import {StackNavigationProp} from '@react-navigation/stack';

export interface PhoneScreenViewInterface {

}

export default class PhoneScreenPresenter {
  view?: PhoneScreenViewInterface;
  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }

   async didPressLoginButton(phone:string, navigation: StackNavigationProp<NavigatorParamList, 'login'>) {
    const confirmation = await this.dependencies.authService.getConfirmation(phone);
    if(confirmation){
      navigation.navigate('code', {confirmation: confirmation, phone: phone})
    }
  };
}
