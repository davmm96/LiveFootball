import React from "react";
import moment from 'moment';

import {
    Image,
    Pressable,
    Text,
    View,
  } from 'react-native';

  import Styles from '../Styles';

export default class Fixture extends React.Component
{
    render() {
        const { localName, localImg, awayName, awayImg, date } = this.props
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
                        <Text>{this.convertDate(date)}</Text>
                        <Text>{this.convertHour(date)}</Text>
                    </View>
                </View>
            </Pressable>
          )
    }

    convertDate(date)
    {
        return moment(new Date(date)).format('DD/MM/YY');
    }

    convertHour(date)
    {
        return moment(new Date(date)).format('HH:mm');
    }
}