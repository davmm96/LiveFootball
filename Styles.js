import { StyleSheet } from 'react-native';
import Constants from './Constants';

export default StyleSheet.create({
      containerTop: {
        flex: 0,
        backgroundColor: Constants.PRIMARY_COLOR
      },
      container: {
        flex: 1,
      },
      containerDetail: {
        flex: 1,
      },
      containerBottom: {
        flex: 1,
        backgroundColor: Constants.PRIMARY_COLOR
      },
      image: {
        width: 30,
        height: 30,
        marginEnd: 10,
      },
      imageDetail: {
        width: 100,
        height: 100,
      },
      imageDetail2: {
        width: 60,
        height: 60,
      },
      row: {
        flexDirection: 'row'
      },
      column: {
        flexDirection: 'column'
      },
      fixtureTeam: {
        marginBottom: 10,
      },
      fixtureRow: {
        fontSize: 10,
        padding: 20,
        borderBottomWidth: 1,
      },
      fixtureDate: {
        alignItems: 'flex-end',
        fontSize: 10,
      },
      teamDetail: {
        flex: 2,
        alignItems: 'center',
      },
      teamDetailText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      teams: {
        paddingBottom: 20,
        paddingTop: 20,
      },
      greenBox: {
        backgroundColor: Constants.PRIMARY_COLOR_TRANSPARENCY,
        borderRadius: 10,
        margin: 20,
        padding: 20,
        
      },
      textBox: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
      },
      imageLive: {
        width: 60,
        height: 60,
      },
      imageSettings: {
        width: 80,
        height: 80,
        marginRight: 30
      },
      imageEventLive: {
        width: 20,
        height: 20,
        paddingRight: 10
      },
      teamDetailTextLive: {
        textAlign: 'center',
        fontWeight: 'bold',
      },
      teamDetailTextTime: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'red'
      },
      textSettings: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10
      },
});