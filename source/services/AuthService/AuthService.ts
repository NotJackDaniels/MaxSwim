import AuthServiceInterface from './AuthServiceInterface';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export default class AuthService implements AuthServiceInterface {
  getConfirmation = async (
    phone: string,
    setError: (error: string) => void,
  ) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phone);
      return confirmation;
    } catch (e) {
      setError(e);
    }
  };

  checkCode = async (
    code: string,
    confirmation: FirebaseAuthTypes.ConfirmationResult,
    setError: (error: string) => void,
  ) => {
    try {
      const response = await confirmation?.confirm(code);
      return response;
    } catch (e) {
      setError(e);
    }
  };
}
