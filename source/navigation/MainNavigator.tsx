import React  from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Dependencies from "../services/Dependencies";
import HomeScreenView from "../scenes/home/HomeScreenView"
import HomeScreenPresenter from "../scenes/home/HomeScreenPresenter";

const Stack = createStackNavigator()

export default class MainNavigator extends React.Component {
  private readonly dependencies = Dependencies.createDefault()

  private createHomeScreen = (): React.ReactNode => {
    let presenter = new HomeScreenPresenter(this.dependencies);
    return <HomeScreenView presenter={presenter}/>
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">{this.createHomeScreen}</Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
