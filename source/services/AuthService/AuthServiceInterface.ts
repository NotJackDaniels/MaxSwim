export default interface AuthServiceInterface {
  getConfirmation: (
    phone: string,
    setError: (error: string) => void,
  ) => Promise<any>;
  checkCode: (
    code: string,
    confirmation: any,
    setError: (error: string) => void,
  ) => Promise<any>;
}
