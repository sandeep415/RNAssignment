import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button, TouchableOpacity, ColorPropType, ImageBackground,
} from 'react-native';
import Colors from "../../Colors"

export default class Home extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
     // <SafeAreaView style={{ backgroundColor: Colors.white }} forceInset={{ bottom: 'never', top: 'never' }}>
        <View style={{ height: '100%', backgroundColor: Colors.pageBackground }}>
            <ImageBackground
          style={ styles.imgBackground}
           source={require('../../assets/home_screen.jpg')} >
          <View style={{ flexDirection: 'row', height: '50%', paddingTop: 100 }}>

            <View style={styles.circleContainer}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>Profile</Text>
              </View>

            </View>

            <View style={styles.circleContainer}>
              <View style={styles.circle}>
              <Text style={styles.circleText}>{"My\nAccount"}</Text>
              </View>

            </View>

          </View>

          <View style={{ flexDirection: 'row', height: '50%', paddingBottom: 100 }}>

            <View style={styles.circleContainer}>
              <View style={styles.circle}>
              <Text style={styles.circleText}>{"My\nOrders"}</Text>
              </View>

            </View>

            <View style={styles.circleContainer}>
              <View style={styles.circle}>
              <Text style={styles.circleText}>{"My Cart"}</Text>
              </View>

            </View>

          </View>
          </ImageBackground>
        </View>
     // </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  halfContainer: {

  },
  circleContainer:
  {
    width: '50%', justifyContent: 'center',
    alignItems: 'center', alignContent: 'center'
  },

  circle:
  {
    width: 130, height: 130, borderWidth: 1, borderRadius: 20,
    opacity:0.5,
    color:'white',
    justifyContent : 'center',
    backgroundColor:"#465881",
  },
  
  circleText : {
    color: "white",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
  imgBackground: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    flex: 1 
},
});