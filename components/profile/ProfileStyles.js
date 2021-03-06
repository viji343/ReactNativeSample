import { StyleSheet, StatusBar } from 'react-native';

export const ProfileStyles = StyleSheet.create({
        profilepic:{
            height:350
        },
        label:{
            fontSize:20,
            fontWeight:'bold',
            textAlign:'left'
        },
        rightText:{
            fontSize:15,
            fontWeight:'bold',
            textAlign:'right'
        },
        editButton: {
            alignItems:'flex-end',
            backgroundColor: 'skyblue',
            padding: 20,
            position:'absolute',
            //marginLeft:120,
            //marginTop:-20,
            borderRadius:100,
            fontSize:20,
            color:'#FFFFFF'
        },
        bigblue: {
            color: 'blue',
            fontWeight: 'bold',
            fontSize: 30,
        },
        red: {
            color: 'red',
        },
        smalldiv:{
            flex:1,
            backgroundColor: 'powderblue'
        },
        mediumdiv:{
            flex:8,
            backgroundColor: 'skyblue',
            alignItems: 'center'
        },
        bigdiv:{
            flex:1,
            backgroundColor: 'steelblue'
        },
        header:{
            flex:1,
            backgroundColor: 'powderblue',
            alignItems: 'center'
        },
        content:{
            flex:8,
            backgroundColor: 'skyblue',
            alignItems: 'center'
        },
        footer:{
            flex:1,
            backgroundColor: 'steelblue',
            alignItems: 'flex-end',
            paddingTop:30
        },
        headerText:{
            fontSize:40,
            fontWeight:'bold'
        },
        input:{
            borderStyle:'solid',
            borderColor:'#000',
            height: 40,
            borderRadius:10
        },
        container: {
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: StatusBar.currentHeight,
        },
        navBar: {
            flexDirection: 'row',
            paddingTop: 25,
            marginBottom: 20,
            height: 64,
            backgroundColor: '#1EAAF1',
        },
        navBarHeader: {
            flex: 1,
            color: '#FFFFFF',
            fontWeight: 'bold',
            textAlign: 'center'
        },
        content: {
            flex: 4,
            paddingLeft: 15,
            paddingRight: 15
        },
        label: {
            color: '#333',
            fontSize: 16,
            marginTop: 15
        },
        textinput: {
            alignSelf: 'stretch',
            height: 40, 
            fontSize: 16,
            borderWidth: 2,
            borderColor: "black",
        },
        invalidInput:{
            alignSelf: 'stretch',
            height: 40, 
            fontSize: 16,
            borderWidth: 2,
            borderColor: "red",
        }
    });
