import React, { cloneElement } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Constants from '../Constants';
import APISports from '../api/APISports';
import Fixture from './Fixture';


export default class FixtureList extends React.Component {

  constructor(props) {
    super(props)
    this.apiClient = new APISports()
    this.state = {
      fixtures:[],
      loading: false,
    }

    props.navigation.setOptions({
        title: 'Games',
    })
  }

  componentDidMount () {
    this.loadFixtures()
  }

  async loadFixtures(){

    this.setState({loading: true})

    const result = await this.apiClient.getFixtures(Constants.DEFAULT_LEAGUE,Constants.DEFAULT_SEASON)

    this.setState({
      fixtures: result.resultFixtures,
      loading: false,
    })
  }

  render() {
    return (<SafeAreaView style={styles.container}>
      {this.renderList()}
      </SafeAreaView>);
  }

  renderList() {

    const { fixtures, loading } = this.state

    return(
      <FlatList
        data={fixtures}
        renderItem={this.renderItem}
        onRefresh={() => this.loadFixtures()}
        refreshing={loading}
      />
    )
  }

  renderItem = ({item}) => (
    <Fixture 
        localName={item.teams.home.name} 
        localImg={item.teams.home.logo} 
        awayName={item.teams.away.name}
        awayImg={item.teams.away.logo}
        onPress={() => this.onFixturePress(item)}
    />
  )

  onFixturePress = (fixture) => {
    this.props.navigation.navigate('fixtureDetail', {
        fixture: fixture,
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 50,
    height: 50
  },
  fixture: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 12,
    padding: 30,
    borderBottomWidth: 1,
  },
  sectionTitle: {
    fontSize: 20,
    alignContent: 'center',
    fontWeight: '800',
  },
  sectionDescription: {
    margin: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});
