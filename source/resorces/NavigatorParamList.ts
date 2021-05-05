import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export type NavigatorParamList = {
  login: undefined;
  code: {
    confirmation: Promise<FirebaseAuthTypes.ConfirmationResult>;
    phone: string;
  };
  home: undefined;
  addLearner: undefined;
};
