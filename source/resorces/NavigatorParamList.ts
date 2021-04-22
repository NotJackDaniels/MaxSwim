import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export type NavigatorParamList = {
  login: undefined;
  code: {confirmation: FirebaseAuthTypes.ConfirmationResult};
  home: undefined;
  addLearner:undefined;
};
