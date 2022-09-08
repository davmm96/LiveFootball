import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FixtureDetail from './components/FixtureDetail';
import FixtureList from './components/FixtureList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from "react-native-vector-icons/Ionicons";

import I18n from "./i18n/i18n";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const FixtureListStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="fixtureList" component={FixtureList}/>
    <Stack.Screen name="fixtureDetail" component={FixtureDetail}/>
  </Stack.Navigator>

)
class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
              name="fixtures" 
              component={FixtureListStack}
              options={{
                headerShown: false,
                tabBarLabel: I18n.t('fixtures'),
                tabBarIcon: ({ color, size }) => (
                  <Icon name="football" color={color} size={size} />
                ),
              }}/>
          <Tab.Screen 
              name="standing" 
              component={FixtureListStack}
              options={{
                headerShown: false,
                tabBarLabel: I18n.t('standings'),
                tabBarIcon: ({ color, size }) => (
                  <Icon name="ios-podium" color={color} size={size} />
                ),
              }}/>
          <Tab.Screen 
              name="settings" 
              component={FixtureListStack}
              options={{
                headerShown: false,
                tabBarLabel: I18n.t('settings'),
                tabBarIcon: ({ color, size }) => (
                  <Icon name="settings" color={color} size={size} />
                ),
              }}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
