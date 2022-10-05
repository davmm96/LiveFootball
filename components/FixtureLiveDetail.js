import React from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    Animated,
    TouchableOpacity,
    NativeModules,
  } from 'react-native';
  import I18n from "../i18n/i18n";
  import Styles from "../Styles";
  import Goal from '../resources/goal.png';
  import YellowCard from '../resources/yellow_card.png';
  import RedCard from '../resources/red_card.png';


export default class FixtureLiveDetail extends React.Component {

    constructor(props) {
        super(props)
        this.fixture = props.route.params.live
        props.navigation.setOptions({
            title: I18n.t('fixture_detail_label')
        })

        this.opacity = new Animated.Value(0);

        Animated.timing(this.opacity, {
            toValue:1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }

    render () {

       return (
            <View style={[Styles.containerDetail]}>
                <View style={[Styles.row, Styles.teams, Styles.greenBox]}>
                    <View style={[Styles.column, Styles.teamDetail]}>
                        <Image source={{ uri: this.fixture.teams.home.logo}} style={Styles.imageLive}/>
                        <Text style={Styles.teamDetailTextLive}>{this.fixture.teams.home.name}</Text>
                        <TouchableOpacity onPress={this.downloadImageLocal} style={[Styles.column]}>
                            <Text style={Styles.teamSmallText}>{I18n.t('textDownload')}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[Styles.column, Styles.teamDetail]}>
                        <Text style={Styles.teamDetailText}>{this.fixture.goals.home} - {this.fixture.goals.away}</Text>
                        <Text style={Styles.teamDetailTextTime}>{this.fixture.fixture.status.elapsed}'</Text>
                    </View>
                    <View style={[Styles.column, Styles.teamDetail]}>
                        <Image source={{ uri: this.fixture.teams.away.logo}} style={Styles.imageLive}/>
                        <Text style={Styles.teamDetailTextLive}>{this.fixture.teams.away.name}</Text>
                        <TouchableOpacity onPress={this.downloadImageAway} style={[Styles.column]}>
                            <Text style={Styles.teamSmallText}>{I18n.t('textDownload')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    data={this.fixture.events}
                    renderItem={this.renderEvent.bind(this)}
                />
            </View>
        )
    }


    renderEvent ({item}) {

        if(item.type == 'Goal')
            return (<Animated.View style={[Styles.containter, Styles.greenBox, {opacity: this.opacity}]}>
                        <Text>
                            <Image 
                                source={{ uri: Image.resolveAssetSource(Goal).uri}} 
                                style={Styles.imageEventLive}/> {item.player.name} ({item.time.elapsed}')<Image source={{ uri: item.team.logo}} style={Styles.imageEventLive}/></Text>
                    </Animated.View>)
        else if(item.type == 'Card' && item.detail == 'Yellow Card')
            return (<Animated.View style={[Styles.containter, Styles.greenBox, {opacity: this.opacity}]}>
                    <Text>
                        <Image 
                            source={{ uri: Image.resolveAssetSource(YellowCard).uri}} 
                            style={Styles.imageEventLive}/> {item.player.name} <Image source={{ uri: item.team.logo}} style={Styles.imageEventLive}/></Text>
                </Animated.View>)
        else if(item.type == 'Card' && item.detail == 'Red Card')
                return (<Animated.View style={[Styles.containter, Styles.greenBox, {opacity: this.opacity}]}>
                        <Text>
                            <Image 
                                source={{ uri: Image.resolveAssetSource(RedCard).uri}} 
                                style={Styles.imageEventLive}/> {item.player.name} <Image source={{ uri: item.team.logo}} style={Styles.imageEventLive}/></Text>
                    </Animated.View>)
    }

    downloadImageLocal = async () => {
        const name = this.fixture.teams.home.name;
        const url = this.fixture.teams.home.logo;
        const ImageManager = NativeModules.ImageManager;

        try {
            await ImageManager.downloadImage(
                name, 
                url
            );

            alert(I18n.t('imageDownloaded'));
        } catch (error) {
            alert(error);
        }
    };

    downloadImageAway = async () => {
        const name = this.fixture.teams.away.name;
        const url = this.fixture.teams.away.logo;
        const ImageManager = NativeModules.ImageManager;

        try {
            await ImageManager.downloadImage(
                name, 
                url
            );

            alert(I18n.t('imageDownloaded'));
        } catch (error) {
            alert(error);
        }
    };
}