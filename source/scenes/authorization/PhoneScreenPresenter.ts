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
    try{
      const confirmation = await auth().signInWithPhoneNumber(phone);
      console.warn(phone);
      navigation.navigate('code', {confirmation: confirmation})
      
    }catch(e) {
      console.warn(JSON.stringify(e));
    }
  };
}
