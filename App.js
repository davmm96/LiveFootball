import React, { Component, Fragment } from 'react';

import {
  SafeAreaView,
} from 'react-native';
import Styles from './Styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FixtureDetail from './components/FixtureDetail';
import FixtureList from './components/FixtureList';
import StandingList from './components/StandingList';
import StandingDetail from './components/StandingDetail';
import Settings from './components/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";
import I18n from "./i18n/i18n";
import Constants from './Constants';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const FixtureStack = () => (
  <Stack.Navigator 
    screenOptions={{
      headerStyle: {
        backgroundColor: Constants.PRIMARY_COLOR,
      },
      headerTintColor: Constants.SECONDARY_COLOR,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen 
        name="fixtureList" 
        component={FixtureList}/>
    <Stack.Screen 
        name="fixtureDetail" 
        component={FixtureDetail}/>
  </Stack.Navigator>
)

const StandingStack = () => (
  <Stack.Navigator
    screenOptions={{
        headerStyle: {
          backgroundColor: Constants.PRIMARY_COLOR,
        },
        headerTintColor: Constants.SECONDARY_COLOR,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    }}>
    <Stack.Screen 
        name="standingList" 
        component={StandingList}/>
    <Stack.Screen 
        name="fixtureDetail" 
        component={StandingDetail}/>
  </Stack.Navigator>
)

class App extends React.Component {

  render() {
    return (
      <Fragment>
      <SafeAreaView style={Styles.containerTop} />
      <SafeAreaView style={Styles.containerBottom} >
        <NavigationContainer>
          <Tab.Navigator
           screenOptions={{
            tabBarActiveTintColor: Constants.SECONDARY_COLOR,
            tabBarInactiveTintColor: Constants.INACTIVE_COLOR,
            tabBarShowLabel: true,
            tabBarStyle: {
              color: 'white',
              backgroundColor: Constants.MAIN_COLOR,
            }
         }}>
            <Tab.Screen 
                name="fixtures" 
                component={FixtureStack}
                options={{
                  headerShown: false,
                  tabBarLabel: I18n.t('fixtures'),
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="football" color={color} size={size} />
                  ),
                }}/>
            <Tab.Screen 
                name="standing" 
                component={StandingStack}
                options={{
                  headerShown: false,
                  tabBarLabel: I18n.t('standings'),
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="ios-podium" color={color} size={size} />
                  ),
                }}/>
            <Tab.Screen 
                name="settings" 
                component={Settings}
                options={{
                  headerShown: false,
                  tabBarLabel: I18n.t('settings'),
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="settings" color={color} size={size} />
                  ),
                }}/>
          </Tab.Navigator>
        </NavigationContainer>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default App;
