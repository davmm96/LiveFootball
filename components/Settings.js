import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

import Styles from '../Styles';
import I18n from "../i18n/i18n";
import Constants from '../Constants';
import Premier from '../resources/premier.png'
import Liga from '../resources/laliga.png'
import Bundesliga from '../resources/bundesliga.png'
import AsyncStorage from '@react-native-community/async-storage';


export default class Settings extends React.Component {

  constructor(props) {
    super(props)
    props.navigation.setOptions({
        title: I18n.t('settings'),
        headerStyle: {
            backgroundColor: Constants.PRIMARY_COLOR,
          },
          headerTintColor: Constants.SECONDARY_COLOR,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    })
  }

  render() {
    return (<SafeAreaView style={Styles.container}>
              <ScrollView>
                <View style={[Styles.column]}>
                  <View style={[Styles.column, Styles.teams, Styles.greenBox]}>
                      <Text style={[Styles.textSettings]}>{I18n.t('settingsLeague')}</Text>
                      <View style={[Styles.row]}>
                        <Pressable onPress={() => AsyncStorage.setItem('league', '39')}>
                          <Image source={{ uri: Image.resolveAssetSource(Premier).uri}} style={[Styles.imageSettings]}/>
                        </Pressable>
                        <Pressable onPress={() => AsyncStorage.setItem('league', '140')}>
                          <Image source={{ uri: Image.resolveAssetSource(Liga).uri}} style={[Styles.imageSettings]}/>
                        </Pressable>
                        <Pressable onPress={() => AsyncStorage.setItem('league', '78')}>
                          <Image source={{ uri: Image.resolveAssetSource(Bundesliga).uri}} style={[Styles.imageSettings]}/>
                        </Pressable>
                      </View>
                  </View>
                  <View style={[Styles.column, Styles.teams, Styles.greenBox]}>
                      <Text style={[Styles.textSettings]}>{I18n.t('settingsGames')}</Text>
                      <View style={[Styles.row, Styles.rowSettings]}>
                        <Pressable style={Styles.buttonSettings} onPress={() => AsyncStorage.setItem('games', '10')}>
                          <Text style={Styles.textButton}>10</Text>
                        </Pressable>
                        <Pressable style={Styles.buttonSettings} onPress={() => AsyncStorage.setItem('games', '20')}>
                          <Text style={Styles.textButton}>20</Text>
                        </Pressable>
                        <Pressable style={Styles.buttonSettings} onPress={() => AsyncStorage.setItem('games', '30')}>
                          <Text style={Styles.textButton}>30</Text>
                        </Pressable>
                      </View>
                  </View>
                  <View style={[Styles.column, Styles.teams, Styles.greenBox]}>
                      <Text style={[Styles.textSettings]}>{I18n.t('settingsInfo')}</Text>
                      <Text>LiveFootball V1.0</Text>
                      <Text>David Melero Morant</Text>
                      <Text>2022</Text>
                  </View>
                </View>
              </ScrollView>
            </SafeAreaView>);
  }
}
