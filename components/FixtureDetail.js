import React from "react";
import {
    View,
    Text,
  } from 'react-native';
  import I18n from "../i18n/i18n";

export default class FixtureDetail extends React.Component {

    constructor(props) {
        super(props)
        this.fixture = props.route.params.fixture
        props.navigation.setOptions({
            title: I18n.t('fixture_detail_label')
        })
    }

    render () {
        return (
            <View>
                <Text>{this.fixture.teams.home.name} vs {this.fixture.teams.away.name} </Text>
                <Text>{this.fixture.teams.home.name} vs {this.fixture.teams.away.name} </Text>
            </View>
        )
    }
}