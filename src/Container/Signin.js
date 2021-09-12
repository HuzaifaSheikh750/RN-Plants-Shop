import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  AsyncStorage
} from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

function Signin({ navigation }) {

  // const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, settoken] = useState(null)

  // const FacebookLogin = async () => {
  //   const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  //   if (result.isCancelled) {
  //     throw 'User cancelled the login process';
  //   }
  
  //   // Once signed in, get the users AccesToken
  //   const data = await AccessToken.getCurrentAccessToken();
  
  //   if (!data) {
  //     throw 'Something went wrong obtaining access token';
  //   }
  
  //   // Create a Firebase credential with the AccessToken
  //   const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(facebookCredential);

  // }

  const Login = async ({ navigate }) => {
    try {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          AsyncStorage.setItem('token', email)
          console.log('Login in');
          navigation.navigate('Homepage')
          // console.log(userName)
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
          console.error(error);
        });
    } catch (error) {
      console.log(error)
    }
  }

  const tokenLogin = async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      if (value !== null) {
        navigation.navigate('Homepage')
        // dispatch({type: "UPDATEDATA", email})

        console.log('connected')
      } else {

      }
    } catch (error) {
      console.log(error)
    }
  }
  tokenLogin();

  return (

    <ScrollView>
      <View style={styles.container}>

        <StatusBar barStyle='light-content'></StatusBar>

        <View style={styles.header}>
          <Image style={styles.facebookLogo} source={require('../assets/quiz3.png')} />
        </View>

        <View style={styles.login}>
          <Text style={{ fontSize: 34, fontWeight: 'bold', color: '#6c8eed' }}>Login</Text>
        </View>

        <View style={styles.field}>
          <TextInput onChangeText={(text) => setEmail(text)} keyboardType={'email-address'} style={{ width: '80%', borderWidth: 2, borderColor: "grey", borderRadius: 100, paddingLeft: 15 }} placeholder="Email" />
        </View>

        <View style={styles.field}>
          <TextInput onChangeText={(text) => setPassword(text)} secureTextEntry={true} style={{ width: '80%', borderWidth: 2, borderColor: "grey", borderRadius: 100, paddingLeft: 15 }} placeholder="Password" />
        </View>

        <View style={styles.field}>
          <TouchableOpacity onPress={Login} style={[styles.btn, { backgroundColor: '#6c8eed', width: '80%', padding: 15, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }]}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row-reverse', paddingLeft: 50, paddingTop: 10 }}>
          <Text style={{ color: '#6c8eed' }}>Forgat Password</Text>
        </View>

        <View style={styles.fblogin}>
          <TouchableOpacity style={styles.fbbtn}
            onPress={()=>FacebookLogin()}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Continue with facebook</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.field}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}>
            <Text style={{ color: '#6c8eed' }}>Dont't have An Account ? Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}
const { height } = Dimensions.get("screen")
const height_logo = height * 0.5 * 0.4;


var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    width: '100%'
  },
  facebookLogo: {
    width: height_logo,
    height: height_logo
  },
  login: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 15
  },
  field: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 20
  },
  btn: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  fblogin: {
    alignItems: 'center',
    paddingTop: 10,
    width: '100%',
  },
  fbbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    borderWidth: 2,
    borderColor: '#4267b2',
    borderRadius: 100,
    padding: 14,
    backgroundColor: '#4267b2',
    
  }
})

export default Signin;
