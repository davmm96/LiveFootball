import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
  Text,
  View,
  Button
} from 'react-native';

import Styles from '../Styles';
import I18n from "../i18n/i18n";
import Constants from '../Constants';
import Premier from '../resources/premier.png'
import Liga from '../resources/laliga.png'
import Bundesliga from '../resources/bundesliga.png'


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
                        <Pressable onPress={this.setLeague(39)}>
                          <Image source={{ uri: Image.resolveAssetSource(Premier).uri}} style={[Styles.imageSettings]}/>
                        </Pressable>
                        <Pressable onPress={this.setLeague(140)}>
                          <Image source={{ uri: Image.resolveAssetSource(Liga).uri}} style={[Styles.imageSettings]}/>
                        </Pressable>
                        <Pressable onPress={this.setLeague(78)}>
                          <Image source={{ uri: Image.resolveAssetSource(Bundesliga).uri}} style={[Styles.imageSettings]}/>
                        </Pressable>
                      </View>
                  </View>
                  <View style={[Styles.column, Styles.teams, Styles.greenBox]}>
                      <Text style={[Styles.textSettings]}>{I18n.t('settingsGames')}</Text>
                      <Button
                        onPress={this.setGames(10)}
                        title="10"
                        color="#841584"
                        accessibilityLabel="10"
                      />
                      <Button
                        onPress={this.setGames(20)}
                        title="20"
                        color="#841584"
                        accessibilityLabel="20"
                      />
                      <Button
                        onPress={this.setGames(30)}
                        title="30"
                        color="#841584"
                        accessibilityLabel="30"
                      />
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

  setLeague = (id) => {

  }

  setGames = (games) => {

  }
}
