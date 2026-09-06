import { NavigationContainer } from '@react-navigation/native'; 

import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

  

import PlayerScreen from './screens/PlayerScreen'; 

import GameScreen from './screens/GameScreen'; 

  

const Stack = createNativeStackNavigator(); 

  

export default function App() { 

  return ( 

    <NavigationContainer> 

      <Stack.Navigator initialRouteName="Home"> 

  

        <Stack.Screen 

          name="Home" 

          component={PlayerScreen} 

        /> 

  

        <Stack.Screen 

          name="Game" 

          component={GameScreen} 

        /> 

  

      </Stack.Navigator> 

    </NavigationContainer> 

  ); 

} 