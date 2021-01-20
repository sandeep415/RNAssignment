// import React, {Component} from 'react';
// import {
//   Alert,
//   View,
//   Image,
//   Text,
//   Dimensions,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// const deviceWidth = Dimensions.get('window').width;
// const deviceHeight = Dimensions.get('window').height;
// export default class LoginScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//     };
//     this.showCredentials = this.showCredentials.bind(this);
//     this.loginUSer = this.loginUSer.bind(this);
//     this.imagePressed = this.imagePressed.bind(this);
//     this.signupPressed = this.signupPressed.bind(this);
//   }
//   imagePressed() {
//     console.log('image pressed');
//   }
//   signupPressed() {
//     this.props.navigation.navigate('signup');
//     // Alert.alert('sign up pressed');
//   }
//   showCredentials() {
//     Alert.alert(
//       `username is ${this.state.username} and password is ${this.state.password}`,
//     );
//   }
//   loginUSer() {
//     if (this.state.username == 'amar' && this.state.password == 'wwwwww') {
//       this.props.navigation.navigate('tabNavigator');
//     } else {
//       this.showCredentials();
//     }
//   }
//   render() {
//     return (
//       <View style={loginStyles.containerViewStyle}>
//         <Image
//           style={{
//             // zIndex: -1,
//             width: deviceWidth,
//             height: deviceHeight * 0.34,
//             resizeMode: 'cover',
//             position: 'absolute',
//           }}
//           source={require('../../assets/loginHeader.jpg')}
//         />
//         <View style={loginStyles.credentialViewStyle}>
//           <Text
//             style={{
//               marginTop: deviceHeight * 0.1,
//               alignSelf: 'center',
//               // fontFamily: 'Countryside-YdKj',
//               fontSize: 35
//             }}>
//             Welcome
//           </Text>
//           <View style={loginStyles.credentialContainerViewStyle}>
//             <View
//               style={{
//                 flexDirection: 'column',
//                 height: 30,
//               }}>
//               <Text style={{fontSize: 16, margin: 4, color: 'gray'}}>
//                 Enter Username:{' '}
//               </Text>
//               <TextInput
//                 style={loginStyles.textFieldStyle}
//                 editable={true}
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 placeholder="please enter username"
//                 //   value={this.state.username}
//                 onChangeText={(userName) => this.setState({username: userName})}
//               />
//             </View>
//             <View
//               style={{
//                 flexDirection: 'column',
//                 marginTop: 40,
//                 height: 30,
//               }}>
//               <Text style={{fontSize: 16, margin: 4, color: 'gray'}}>
//                 Enter Password:{' '}
//               </Text>
//               <TextInput
//                 style={loginStyles.textFieldStyle}
//                 editable={true}
//                 secureTextEntry={true}
//                 placeholder="please enter password"
//                 //   value={this.state.password}
//                 onChangeText={(pass) => this.setState({password: pass})}
//               />
//             </View>
//             <TouchableOpacity style={{marginTop: 40, alignSelf: 'flex-end'}}>
//               <Text>Forgot password?</Text>
//             </TouchableOpacity>
//           </View>
//           <TouchableOpacity
//             style={loginStyles.touchableStyles}
//             onPress={this.loginUSer}>
//             <Text style={{alignSelf: 'center', color: 'white', fontSize: 18}}>
//               Sign In
//             </Text>
//           </TouchableOpacity>
//           <View
//             style={{
//               flexDirection: 'row',
//               marginTop: 40,
//               alignSelf: 'center',
//             }}>
//             <Text>Don't have an account?</Text>
//             <TouchableOpacity onPress={this.signupPressed}>
//               <Text style={{color: 'blue', marginLeft: 4}}>Sign up</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// const loginStyles = StyleSheet.create({
//   containerViewStyle: {
//     // flex: 1,
//   },
//   credentialViewStyle: {
//     // borderTopLeftRadius: 40,
//     // borderTopRightRadius: 40,
//     height: deviceHeight,
//     backgroundColor: 'white',
//     // flex:1,
//     justifyContent:'center'
//     // marginTop: deviceHeight * 0.28,
//   },
//   credentialContainerViewStyle: {
//     alignSelf: 'center',
//     width: deviceWidth * 0.8,
//     borderRadius: 8,
//   },
//   textFieldStyle: {
//     // backgroundColor: 'lightblue',
//     alignSelf: 'stretch',
//     borderBottomColor: 'blue',
//     marginRight: 0,
//     borderLeftWidth: 0,
//     borderRightWidth: 0,
//     fontSize: 13,
//     borderTopWidth: 0,
//     color: 'blue',
//     borderBottomWidth: 1.5,
//     marginTop: -6,
//     textAlignVertical: 'center',
//     justifyContent: 'center',
//   },
//   touchableStyles: {
//     borderRadius: 27,
//     alignSelf: 'center',
//     width: deviceWidth * 0.7,
//     justifyContent: 'center',
//     flexDirection: 'column',
//     marginBottom: 16,
//     marginTop: 40,
//     height: 54,
//     backgroundColor: 'blue',
//     width: deviceWidth * 0.6,
//     alignItems: 'center',
//     alignContent: 'center',
//   },
// });

import React, {Component} from 'react'
import { Alert, StyleSheet, Text, View, TextInput,ImageBackground, TouchableOpacity } from 'react-native';


export default class LoginAcivity extends React.Component {
    state={
      username:"",
      password:""
    }

    constructor(props) {
          super(props);
          this.state = {
            email: "",
            password: "",
          };
          this.showCredentials = this.showCredentials.bind(this);
          this.loginUSer = this.loginUSer.bind(this);
          this.imagePressed = this.imagePressed.bind(this);
          this.signupPressed = this.signupPressed.bind(this);
        }
        imagePressed() {
          console.log('image pressed');
        }
        signupPressed() {
          this.props.navigation.navigate('signup');
          // Alert.alert('sign up pressed');
        }
        showCredentials() {
          Alert.alert(
            `Username is ${this.state.username} and Password is ${this.state.password}`,
          );
        }
        loginUSer() {
          if (this.state.username == 'sandeep' && this.state.password == 'sana') {
            this.props.navigation.navigate('tabNavigator');
          } else {
            this.showCredentials();
          }
        }
    render(){
      return (
        <View style={styles.container}>
          <ImageBackground
          style={ styles.imgBackground}
           source={require('../../assets/login_image.jpg')} >
        
          <Text style={styles.logo}>Welcome</Text>
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Enter Username" 
              color = 'white'
              placeholderTextColor="#ffffff"
              onChangeText={text => this.setState({email:text})}/>
          </View>
          <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Enter Password" 
              placeholderTextColor="#ffffff"
              onChangeText={text => this.setState({password:text})}/>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {this.loginUSer} style={styles.loginBtn}>
            <Text style={styles.loginText}>Sign In</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 40,
              alignSelf: 'center',
            }}>
            <Text style={styles.signUp}>Don't have an account?</Text>
            <TouchableOpacity onPress={this.signupPressed}>
              <Text style={{color: '#fb5b5a', marginLeft: 5}}>Sign up</Text>
            </TouchableOpacity>
          </View>
  
          </ImageBackground>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
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
    logo:{
      color:"white",
      alignItems: 'center',
      marginBottom:30,
      marginLeft:30,
      marginRight:30,
      fontSize:30
    },
    inputView:{
      width:"80%",
      backgroundColor:"#465881",
      opacity:0.6,
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"white"
    },
    forgot:{
      color:"white",
      fontSize:11
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white"
    },
    signUp:{
      color:'white'
    }
  });
