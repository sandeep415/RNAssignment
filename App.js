import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native';

import LoginScreen from './src/activity/loginScreen';
import SignUpScreen from './src/activity/signupScreen';
import SplashScreen from './src/activity/splashscreen';
import HomeTabScreen from './src/activity/homeTab';
import Colors from './Colors';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        
      <Stack.Screen
          options={{headerShown: false}}
          name="splash"
          component={SplashScreen}
        />
        
        <Stack.Screen
          options={{headerShown: false}}
          name="login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="signup"
          component={SignUpScreen}
        />
        <Stack.Screen
          name="hometab"
          component={HomeTabScreen}
          options={{
            title: 'Home', //Set Header Title
            headerStyle: {
              backgroundColor: '#465881', //Set Header color
            },
            headerLeft: null,
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontSize:25,
              fontWeight: 'bold', //Set Header text styleyle
            },
            headerRight: () => (
              <Button
              onPress={() => alert('Logout')}
                title="↩️"
                color='white'
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;