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
// export default class SignUpScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//     };
//     this.registerUser = this.registerUser.bind(this);
//     this.imagePressed = this.imagePressed.bind(this);
//     this.navigateToLogin = this.navigateToLogin.bind(this);
//   }
//   imagePressed() {
//     Alert.alert('select user image pressed');
//   }
//   registerUser() {
//     this.props.navigation.navigate('tabNavigator');
//   }
//   navigateToLogin() {
//     this.props.navigation.goBack();
//   }
//   render() {
//     return (
//       <View style={signupStyles.containerViewStyle}>
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
//         <View style={signupStyles.credentialViewStyle}>
//           <View
//             style={{
//               alignSelf: 'center',
//               justifyContent: 'center',
//               borderColor: 'white',
//               marginTop: -deviceHeight * 0.05,
//             }}>
//             <TouchableOpacity onPress={this.imagePressed}>
//               <Image
//                 style={{
//                   zIndex: -1,
//                   width: deviceWidth * 0.2,
//                   height: deviceHeight * 0.1,
//                   resizeMode: 'cover',
//                   borderWidth: 3,
//                   borderColor: 'silver',
//                   borderRadius: (deviceHeight * 0.1) / 2,
//                 }}
//                 source={require('../../assets/avatar.jpg')}
//               />
//             </TouchableOpacity>
//           </View>

//           <Text
//             style={{
//               marginTop: 20,
//               alignSelf: 'center',
//               fontFamily: 'Countryside-YdKj',
//               fontSize: 35,
//             }}>
//             Sign Up
//           </Text>
//           <View style={signupStyles.credentialContainerViewStyle}>
//             <View
//               style={{
//                 flexDirection: 'column',
//                 height: 30,
//               }}>
//               <Text style={{fontSize: 16, margin: 4, color: 'gray'}}>
//                 username:{' '}
//               </Text>
//               <TextInput
//                 style={signupStyles.textFieldStyle}
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
//                 email:{' '}
//               </Text>
//               <TextInput
//                 style={signupStyles.textFieldStyle}
//                 editable={true}
//                 secureTextEntry={true}
//                 placeholder="please enter email"
//                 //   value={this.state.password}
//                 onChangeText={(pass) => this.setState({password: pass})}
//               />
//             </View>
//             <View
//               style={{
//                 flexDirection: 'column',
//                 marginTop: 40,
//                 height: 30,
//               }}>
//               <Text style={{fontSize: 16, margin: 4, color: 'gray'}}>
//                 password:{' '}
//               </Text>
//               <TextInput
//                 style={signupStyles.textFieldStyle}
//                 editable={true}
//                 secureTextEntry={true}
//                 placeholder="please enter password"
//                 //   value={this.state.password}
//                 onChangeText={(pass) => this.setState({password: pass})}
//               />
//             </View>
//           </View>
//           <TouchableOpacity
//             style={signupStyles.touchableStyles}
//             onPress={this.registerUser}>
//             <Text style={{alignSelf: 'center', color: 'white', fontSize: 18}}>
//               sign up
//             </Text>
//           </TouchableOpacity>
//           <View
//             style={{
//               flexDirection: 'row',
//               marginTop: 40,
//               alignSelf: 'center',
//             }}>
//             <Text>already have an account?</Text>
//             <TouchableOpacity onPress={this.navigateToLogin}>
//               <Text style={{color: 'blue', marginLeft: 4}}>Login</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// const signupStyles = StyleSheet.create({
//   containerViewStyle: {
//     // flex: 1,
//   },
//   credentialViewStyle: {
//     borderTopLeftRadius: 40,
//     borderTopRightRadius: 40,
//     height: deviceHeight,
//     backgroundColor: 'white',
//     marginTop: deviceHeight * 0.28,
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
//     marginTop: 80,
//     height: 54,
//     backgroundColor: 'blue',
//     width: deviceWidth * 0.6,
//     alignItems: 'center',
//     alignContent: 'center',
//   },
// });
import React, {Component} from 'react';
import {
  Alert,
  View,
  Image,
  Text,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.registerUser = this.registerUser.bind(this);
    this.imagePressed = this.imagePressed.bind(this);
    this.navigateToLogin = this.navigateToLogin.bind(this);
  }
  imagePressed() {
    Alert.alert('select user image pressed');
  }
  registerUser() {
    this.props.navigation.navigate('hometab');
  }
  navigateToLogin() {
    this.props.navigation.goBack();
  }
  render() {
    return (
      <View style={styles.container}>
          <ImageBackground
          style={ styles.imgBackground}
           source={require('../../assets/sign_up.jpeg')} >
        
          <Text style={styles.logo}>Get OnBoard</Text>
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
              placeholder="Set Password" 
              placeholderTextColor="#ffffff"
              onChangeText={text => this.setState({password:text})}/>
          </View>
          <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Confirm Password" 
              placeholderTextColor="#ffffff"
              onChangeText={text => this.setState({password:text})}/>
          </View>
          <TouchableOpacity onPress = {this.registerUser} style={styles.loginBtn}>
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity> 
          <Text style={styles.signUp}>Have an account?</Text>
            <TouchableOpacity onPress={this.navigateToLogin}>
              <Text style={{color: '#fb5b5a', marginLeft: 5}}>Sign In</Text>
            </TouchableOpacity>
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
    marginBottom:80,
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
