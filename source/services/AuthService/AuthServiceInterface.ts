import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
export default interface AuthServiceInterface {
    getConfirmation: (phone: string) => Promise<any>;
    checkCode: (code: string, confirmation: any) => Promise<any>;
}
