import React from "react";
import moment from 'moment';
import {
    View,
    Text,
    Image,
    Animated,
  } from 'react-native';
  import I18n from "../i18n/i18n";
  import Styles from "../Styles";
  import Whistle from '../resources/whistle.png';
  import Calendar from '../resources/calendar.png';
  import Stadium from '../resources/stadium.png';



export default class FixtureDetail extends React.Component {

    constructor(props) {
        super(props)
        this.fixture = props.route.params.fixture
        props.navigation.setOptions({
            title: I18n.t('fixture_detail_label')
        })

        this.opacity = new Animated.Value(0);

        Animated.timing(this.opacity, {
            toValue:1,
            duration: 2000,
            useNativeDriver: true
        }).start();

    }

    render () {

        var venue = this.fixture.fixture.venue.name;
        var referee = this.fixture.fixture.referee;

        if(!this.fixture.fixture.venue)
        {
            venue = I18n.t('undefined')
        }

        if(!this.fixture.fixture.referee)
        {
            referee = I18n.t('undefined')
        }

       return (
            <View style={[Styles.containerDetail]}>
                <View style={[Styles.row, Styles.teams, Styles.greenBox]}>
                    <View style={[Styles.column, Styles.teamDetail]}>
                        <Animated.Image source={{ uri: this.fixture.teams.home.logo}} style={[Styles.imageDetail, {opacity: this.opacity}]}/>
                        <Text style={Styles.teamDetailText}>{this.fixture.teams.home.name}</Text>
                    </View>
                    <View style={[Styles.column, Styles.teamDetail]}>
                        <Animated.Image source={{ uri: this.fixture.teams.away.logo}} style={[Styles.imageDetail, {opacity: this.opacity}]}/>
                        <Text style={Styles.teamDetailText}>{this.fixture.teams.away.name}</Text>
                    </View>
                </View>
                <View style={[Styles.row]}>
                    <View style={[Styles.column, Styles.greenBox]}>
                        <Animated.Image source={{ uri: Image.resolveAssetSource(Whistle).uri}} style={[[Styles.imageDetail, {opacity: this.opacity}]]}/>
                        <Text style={[Styles.textBox]}>{referee}</Text>
                    </View>
                    <View style={[Styles.column, Styles.greenBox]}>
                        <Animated.Image source={{ uri: Image.resolveAssetSource(Calendar).uri}} style={[Styles.imageDetail, {opacity: this.opacity}]}/>
                        <Text style={[Styles.textBox]}>{this.convertDate(this.fixture.fixture.date)} - {this.convertHour(this.fixture.fixture.date)}</Text>
                    </View>
                </View>
                <View style={[Styles.row]}>
                <View style={[Styles.column, Styles.greenBox]}>
                        <Animated.Image source={{ uri: Image.resolveAssetSource(Stadium).uri}} style={[Styles.imageDetail, {opacity: this.opacity}]}/>
                        <Text style={[Styles.textBox]}>{venue}</Text>
                    </View>
                </View>
            </View>
        )
    }

    convertDate(timestamp)
    {
        return moment(new Date(timestamp)).format('DD/MM/YY');
    }

    convertHour(timestamp)
    {
        return moment(new Date(timestamp)).format('HH:mm');
    }
}