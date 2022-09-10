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
                <View style={Styles.fixture}>
                    <View>
                        <Text>{localName}</Text>
                        <Image source={{ uri: localImg}} style={Styles.image}/>
                    </View>
                    <Text> VS </Text>
                    <View>
                        <Text>{awayName}</Text>
                        <Image source={{ uri: awayImg}} style={Styles.image}/>
                    </View>
                </View>
                <Text>{this.convertDate(date)}</Text>
            </Pressable>
          )
    }

    convertDate(timestamp)
    {
        return moment(new Date(timestamp)).format('DD/MM/YY HH:mm');
    }
}