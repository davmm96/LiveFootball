import React from 'react';
import {
  FlatList,
} from 'react-native';

import APISports from '../api/APISports';
import FixtureLive from './FixtureLive';
import I18n from "../i18n/i18n";


export default class FixtureLiveList extends React.Component {

  constructor(props) {
    super(props)
    this.apiClient = new APISports()
    this.state = {
      live:[],
      loading: false,
    }

    props.navigation.setOptions({
        title: I18n.t('live_label'),
    })
  }

  componentDidMount () {
    this.loadLive()
  }

  async loadLive(){

    this.setState({loading: true})

    const result = await this.apiClient.getFixturesLive()

    this.setState({
      live: result.resultLive,
      loading: false,
    })
  }

  render() {
    return(
      <FlatList
        data={this.state.live}
        renderItem={this.renderItem}
        onRefresh={() => this.loadLive()}
        refreshing={this.state.loading}
      />
    )
  }

  renderItem = ({item}) => (
    <FixtureLive 
        localName={item.teams.home.name} 
        localImg={item.teams.home.logo} 
        awayName={item.teams.away.name}
        awayImg={item.teams.away.logo}
        goalsLocal={item.goals.home}
        goalsAway={item.goals.away}
        minutes={item.fixture.status.elapsed}
        onPress={() => this.onStandingPress(item)}
    />
  )

  onStandingPress = (live) => {
    this.props.navigation.navigate('liveDetail', {
        live: live,
    })
  }
}

