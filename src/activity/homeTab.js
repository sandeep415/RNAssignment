import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home.js'
import Setting from './Setting'
export default function HomeTabScreen() {
  return (
      <CustomTab />
  );
}
const Tab = createBottomTabNavigator();
function CustomTab() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        iconName = require('../../assets/home.png')
        if (route.name === 'Home') {
          iconName = require('../../assets/home.png')
        } else if (route.name === 'About') {
          iconName = require('../../assets/about.png')
        }
        else if (route.name === 'Settings') {
          iconName = require('../../assets/setting.png')
        }
        // You can return any component that you like here!
      let tintcolor = focused ? '#465881':'gray'
      return <Image source={iconName} style={{width: 22, height: 22,margin:2, tintColor:tintcolor}}/>;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#465881',
      inactiveTintColor: 'gray',
    }}
  >
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="About" component={AboutTab} />
      <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
  );
}
function AboutTab() {
  return (
    <View style={styles.viewStyle}>
      <Text style={{color:'red'}}>About Tab</Text>
    </View>
  );
}

function SettingTab() {
  return (
    <View style={styles.viewStyle}>
      <Text style={{color:'red'}}>Setting Tab</Text>
     </View>
  );
}
const styles = StyleSheet.create({ 
  viewStyle: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});