import React  from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import screens from "../common/screens"
import Dependencies from "../services/Dependencies"
import HomeScreenView from "../scenes/home/HomeScreenView"
import HomeScreenPresenter from "../scenes/home/HomeScreenPresenter"
import AddLearnerPresenter from "../scenes/addLearner/AddLearnerPresenter"
import AddLearnerView from "../scenes/addLearner/AddLearnerView"
import strings from "../resorces/strings";

const Stack = createStackNavigator()

export default class MainNavigator extends React.Component {
  private readonly dependencies = Dependencies.createDefault()

  private createAddLearner = (): React.ReactNode => {
    
    let presenter = new AddLearnerPresenter(this.dependencies)
    return <AddLearnerView presenter={presenter}/>
  }

  private createHomeScreen = (): React.ReactNode => {
    let presenter = new HomeScreenPresenter(this.dependencies)
    return <HomeScreenView presenter={presenter}/>
  }


  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={screens.addLearner}
                          options={{ title: strings.addLearner.screenTitle }}>{this.createAddLearner}</Stack.Screen>
            
          <Stack.Screen name={screens.home}
                        options={{ title: strings.home.screenTitle }}>{this.createHomeScreen}</Stack.Screen>
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
