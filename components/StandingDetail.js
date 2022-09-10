import React from "react";

import {
    View,
    Text,
  } from 'react-native';

export default class FixtureDetail extends React.Component {

    constructor(props) {
        super(props)

        this.fixture = props.route.params.fixture

        props.navigation.setOptions({
            title: 'Game Info',
        })
    }

    render () {

        return (
            <View>
                <Text>{this.fixture.teams.home.name} vs {this.fixture.teams.away.name} </Text>
            </View>
        )
    }
}