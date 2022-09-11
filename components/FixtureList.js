import React from 'react';
import {
  FlatList,
  View,
} from 'react-native';
import Constants from '../Constants';
import APISports from '../api/APISports';
import Fixture from './Fixture';
import I18n from "../i18n/i18n";


export default class FixtureList extends React.Component {

  constructor(props) {
    super(props)
    this.apiClient = new APISports()
    this.state = {
      fixtures:[],
      loading: false,
    }

    props.navigation.setOptions({
        title: I18n.t('fixtures_label')
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
    const {fixtures, loading} = this.state

    return(
      <View>
        <FlatList
          data={fixtures}
          renderItem={this.renderFixture}
          onRefresh={() => this.loadFixtures()}
          refreshing={loading}
        />
      </View>
      
    )
  }

  renderFixture = ({item}) => (
    <Fixture 
        localName={item.teams.home.name} 
        localImg={item.teams.home.logo} 
        awayName={item.teams.away.name}
        awayImg={item.teams.away.logo}
        date={item.fixture.date}
        onPress={() => this.goToDetail(item)}
    />
  )

  goToDetail = (fixture) => {
    this.props.navigation.navigate('fixtureDetail', {fixture: fixture})
  }
}