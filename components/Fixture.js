import React from "react";

import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

export default class Fixture extends React.Component
{
    render() {
        const { localName, localImg, awayName, awayImg } = this.props
        return (
            <Pressable onPress={this.props.onPress}>
                <View style={styles.fixture}>
                <View>
                    <Text>{localName}</Text>
                    <Image source={{ uri: localImg}} style={styles.image}/>
                </View>
                <Text> VS </Text>
                <View>
                    <Text>{awayName}</Text>
                    <Image source={{ uri: awayImg}} style={styles.image}/>
                </View>
                </View>
            </Pressable>
          )
    }
}

const styles = StyleSheet.create({
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
  });