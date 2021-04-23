import AuthServiceInterface from "./AuthServiceInterface";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { showMessage, hideMessage } from "react-native-flash-message";
import strings from "../../resorces/strings";
import colors from "../../resorces/colors";

export default class AuthService implements AuthServiceInterface {

    getConfirmation = async(phone: string) => {
        auth().settings.appVerificationDisabledForTesting = true;
        try{
            const confirmation = await auth().signInWithPhoneNumber(phone);
            return confirmation;
            
          }catch(e) {
            console.warn(JSON.stringify(e));
            return undefined;
          }
    }

    checkCode = async(code: string, confirmation: FirebaseAuthTypes.ConfirmationResult) => {
        try{
            const response = await confirmation?.confirm(code);
            return response;
        } catch(e) {
            console.warn(JSON.stringify(e));
            showMessage({
              message: strings.flashMessages.wrongCode,
              color: colors.Base1,
              backgroundColor: colors.Error
            });
            return null;
        }

    }
}