import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
  Text,
  View,
} from 'react-native';

import Styles from '../Styles';
import I18n from "../i18n/i18n";
import Constants from '../Constants';
import Premier from '../resources/premier.png'
import PremierOff from '../resources/premierOff.png'
import Liga from '../resources/laliga.png'
import LigaOff from '../resources/laligaOff.png'
import Bundesliga from '../resources/bundesliga.png'
import BundesligaOff from '../resources/bundesligaOff.png'
import AsyncStorage from '@react-native-community/async-storage';


export default class Settings extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      league: undefined,
      games: undefined
    }
    this.setGames = this.setGames.bind(this);

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

  componentDidMount () {
    this.getData()
  }

  render() {
    return (<SafeAreaView style={Styles.container}>
              <ScrollView>
                <View style={[Styles.column]}>
                  <View style={[Styles.column, Styles.teams, Styles.greenBox]}>
                      <Text style={[Styles.textSettings]}>{I18n.t('settingsLeague')}</Text>
                      <View style={[Styles.row]}>
                        <Pressable onPress={() => this.setLeague(Constants.ID_PREMIER.toString())}>
                          <Image 
                              source={
                                this.state.league == Constants.ID_PREMIER.toString() ? { uri: Image.resolveAssetSource(Premier).uri} : {uri: Image.resolveAssetSource(PremierOff).uri}}
                                style={[Styles.imageSettings]}/>
                        </Pressable>
                        <Pressable onPress={() => this.setLeague(Constants.ID_LIGA.toString())}>
                          <Image 
                              source={
                                this.state.league == Constants.ID_LIGA.toString() ? { uri: Image.resolveAssetSource(Liga).uri} : {uri: Image.resolveAssetSource(LigaOff).uri}}
                                style={[Styles.imageSettings]}/>
                        </Pressable>
                        <Pressable onPress={() => this.setLeague(Constants.ID_BUNDES.toString())}>
                          <Image 
                              source={
                                this.state.league == Constants.ID_BUNDES.toString() ? { uri: Image.resolveAssetSource(Bundesliga).uri} : {uri: Image.resolveAssetSource(BundesligaOff).uri}}
                                style={[Styles.imageSettings]}/>
                        </Pressable>
                      </View>
                  </View>
                  <View style={[Styles.column, Styles.teams, Styles.greenBox]}>
                      <Text style={[Styles.textSettings]}>{I18n.t('settingsGames')}</Text>
                      <View style={[Styles.row, Styles.rowSettings]}>
                        <Pressable 
                            style={[Styles.buttonSettings, this.state.games=='10' ? { backgroundColor: Constants.PRIMARY_COLOR } : {backgroundColor: "gray"}]} 
                            onPress={() => this.setGames('10')}>
                          <Text style={Styles.textButton}>10</Text>
                        </Pressable>
                        <Pressable 
                          style={[Styles.buttonSettings, this.state.games=='20' ? { backgroundColor: Constants.PRIMARY_COLOR } : {backgroundColor: "gray"}]} 
                          onPress={() => this.setGames('20')}>
                          <Text style={Styles.textButton}>20</Text>
                        </Pressable>
                        <Pressable 
                          style={[Styles.buttonSettings, this.state.games=='30' ? { backgroundColor: Constants.PRIMARY_COLOR } : {backgroundColor: "gray"}]} 
                          onPress={() => this.setGames('30')}>
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

  async getData(){
    this.setState({
      league: await AsyncStorage.getItem('league'),
      games: await AsyncStorage.getItem('games')
    })
  }

  async setGames(numGames){
    await AsyncStorage.setItem('games', numGames)
    .then(alert(I18n.t('gamesPreferences')))

    this.setState({
      games: numGames
    })
  }

  async setLeague(leagueName){
    await AsyncStorage.setItem('league', leagueName)
    .then(alert(I18n.t('leaguePreferences')))

    this.setState({
      league: leagueName
    })
  }
}
