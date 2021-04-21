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
import {StudentCard} from '../scenes/card/CardView';
import CardPresenter from '../scenes/card/CardPresenter';
import PhoneScreenPresenter from '../scenes/authorization/PhoneScreenPresenter';
import PhoneScreenView from '../scenes/authorization/PhoneScreen';
import CodeScreenPresenter from '../scenes/authorization/CodeScreenPresenter';
import CodeScreenView from '../scenes/authorization/CodeScreen';

const Stack = createStackNavigator();

export default class MainNavigator extends React.Component {
  private readonly dependencies = Dependencies.createDefault();

  private createAddLearner = (): React.ReactNode => {
    let presenter = new AddLearnerPresenter(this.dependencies);
    return <AddLearnerView presenter={presenter} />;
  };

  private createHomeScreen = (): React.ReactNode => {
    let presenter = new HomeScreenPresenter(this.dependencies);
    return <HomeScreenView presenter={presenter} />;
  };
  private createPhoneAuthorizationScreen = (props: any): React.ReactNode => {
    let presenter = new PhoneScreenPresenter(this.dependencies);
    return <PhoneScreenView presenter={presenter} {...props} />;
  };
  private createCodeScreen = (props: any): React.ReactNode => {
    let presenter = new CodeScreenPresenter(this.dependencies);
    return <CodeScreenView presenter={presenter} {...props} />;
  };

  private createCard = (): React.ReactNode => {
    let presenter = new CardPresenter(this.dependencies);
    return (
      <StudentCard
        allLessons={0}
        lessonsLeft={10}
        attendance={21}
        telephone={'2321'}
        presenter={presenter}
      />
    );
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
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
            {this.createAddLearner}
          </Stack.Screen>
          <Stack.Screen
            name={screens.home}
            options={{title: strings.home.screenTitle}}>
            {this.createHomeScreen}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
