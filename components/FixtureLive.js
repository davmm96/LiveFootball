import React from "react";

import {
    Image,
    Pressable,
    Text,
    View,
  } from 'react-native';

  import Styles from '../Styles';

export default class FixtureLive extends React.Component
{
    render() {
        const { localName, localImg, awayName, awayImg, goalsLocal, goalsAway, minutes } = this.props
        return (
            <Pressable onPress={this.props.onPress}>
                <View style={[Styles.row, Styles.fixtureRow]}>
                    <View style={[Styles.column, Styles.container]}>
                        <View style={[Styles.row, Styles.fixtureTeam]}>
                            <Image source={{ uri: localImg}} style={Styles.image}/>
                            <Text>{localName}</Text>
                        </View>
                        <View style={Styles.row}>
                            <Image source={{ uri: awayImg}} style={Styles.image}/>
                            <Text>{awayName}</Text>
                        </View>
                    </View>
                    <View style={[Styles.column,, Styles.container, Styles.fixtureDate]}>
                        <Text>{goalsLocal} - {goalsAway}</Text>
                        <Text>{minutes}'</Text>
                    </View>
                </View>
            </Pressable>
          )
    }
}