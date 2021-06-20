import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import screens from '../common/screens';
import Dependencies from '../services/Dependencies';
import HomeScreenView from '../scenes/home/HomeScreenView';
import HomeScreenPresenter from '../scenes/home/HomeScreenPresenter';
import AddLearnerPresenter from '../scenes/addLearner/AddLearnerPresenter';
import AddLearnerView from '../scenes/addLearner/AddLearnerView';
import strings from '../resorces/strings';
import PhoneScreenPresenter from '../scenes/authorization/PhoneScreenPresenter';
import PhoneScreenView from '../scenes/authorization/PhoneScreen';
import CodeScreenPresenter from '../scenes/authorization/CodeScreenPresenter';
import CodeScreenView from '../scenes/authorization/CodeScreen';
import FlashMessage from 'react-native-flash-message';
import UserDetailsPresenter from '../scenes/userDetails/UserDetailsPresenter';
import UserDetailsScreen from '../scenes/userDetails/UserDetailsScreen';

const Stack = createStackNavigator();

export default class MainNavigator extends React.Component {
  private readonly dependencies = Dependencies.createDefault();

  private createAddLearner = (props: any): React.ReactNode => {
    let presenter = new AddLearnerPresenter(this.dependencies);
    return <AddLearnerView presenter={presenter} {...props} />;
  };

  private createHomeScreen = (props: any): React.ReactNode => {
    let presenter = new HomeScreenPresenter(this.dependencies);
    return <HomeScreenView presenter={presenter} {...props} />;
  };
  private createPhoneAuthorizationScreen = (props: any): React.ReactNode => {
    let presenter = new PhoneScreenPresenter(this.dependencies);
    return <PhoneScreenView presenter={presenter} {...props} />;
  };
  private createCodeScreen = (props: any): React.ReactNode => {
    let presenter = new CodeScreenPresenter(this.dependencies);
    return <CodeScreenView presenter={presenter} {...props} />;
  };

  private createUserDetailsScreen = (props: any): React.ReactNode => {
    let presenter = new UserDetailsPresenter(this.dependencies);
    return <UserDetailsScreen presenter={presenter} {...props} />;
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={screens.home}
            options={{title: strings.home.screenTitle, headerShown: false}}>
            {(props) => this.createHomeScreen(props)}
          </Stack.Screen>
          <Stack.Screen
            name={screens.userDetails}
            options={{
              title: strings.userDetails.screenTitle,
              headerShown: false,
            }}>
            {(props) => this.createUserDetailsScreen(props)}
          </Stack.Screen>
          <Stack.Screen
            name={screens.phoneAuthorization}
            options={{
              title: strings.phoneAuthorization.screenTitle,
              headerShown: false,
            }}>
            {(props) => this.createPhoneAuthorizationScreen(props)}
          </Stack.Screen>
          <Stack.Screen
            name={screens.code}
            options={{
              title: strings.phoneAuthorization.screenTitle,
              headerShown: false,
            }}>
            {(props) => this.createCodeScreen(props)}
          </Stack.Screen>
          <Stack.Screen
            name={screens.addLearner}
            options={{
              title: strings.addLearner.screenTitle,
              headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
              },
            }}>
            {(props) => this.createAddLearner(props)}
          </Stack.Screen>
        </Stack.Navigator>
        <FlashMessage />
      </NavigationContainer>
    );
  }
}
