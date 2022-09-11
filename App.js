import React, { Component, Fragment } from 'react';

import {
  SafeAreaView,
} from 'react-native';
import Styles from './Styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FixtureDetail from './components/FixtureDetail';
import FixtureList from './components/FixtureList';
import FixtureLiveList from './components/FixtureLiveList';
import FixtureLiveDetail from './components/FixtureLiveDetail';
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

const LiveStack = () => (
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
        name="liveList" 
        component={FixtureLiveList}/>
    <Stack.Screen 
        name="liveDetail" 
        component={FixtureLiveDetail}/>
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
              backgroundColor: Constants.PRIMARY_COLOR,
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
                name="live" 
                component={LiveStack}
                options={{
                  headerShown: false,
                  tabBarLabel: I18n.t('fixtures_live'),
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="ios-logo-rss" color={color} size={size} />
                  ),
                }}/>
            <Tab.Screen 
                name="settings" 
                component={Settings}
                options={{
                  headerShown: true,
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
