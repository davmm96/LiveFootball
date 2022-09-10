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
      containerBottom: {
        flex: 1,
        backgroundColor: Constants.PRIMARY_COLOR
      },
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
      sectionTitle: {
        fontSize: 20,
        alignContent: 'center',
        fontWeight: '800',
      },
      sectionDescription: {
        margin: 8,
        fontSize: 18,
        fontWeight: '400',
      },
});