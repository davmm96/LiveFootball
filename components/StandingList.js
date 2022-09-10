import React, { cloneElement } from 'react';
import {
  FlatList,
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
        title: 'Next Games',
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

