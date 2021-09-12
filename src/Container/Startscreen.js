import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Entypo';

function Startscreen({ navigation }) {

    setTimeout(()=>{
        navigation.navigate('Signin')
    }, 2000);

    return (
        <View style={styles.container}>

            <StatusBar barStyle='light-content'></StatusBar>
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duration={1500}
                    style={styles.facebookLogo}
                    source={require('../assets/quiz3.png')}
                />
            </View>

            <Animatable.View
                style={styles.footer}
                animation="fadeInUpBig">
                <Text style={styles.title}>QUIZ APP</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('Signin')}>
                    <Text style={styles.buttonText}>Get Started </Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    );
}

const { height } = Dimensions.get("screen")
const height_logo = height * 0.7 * 0.4;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        backgroundColor: '#6c8eed',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    facebookLogo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    },
    text: {
        color: 'white',
        paddingTop: 10
    },
    button: {
        height: 40,
        width: 130,
        backgroundColor: "white",
        borderRadius: 50,
        marginLeft: 170,
        marginTop: 70
    },
    buttonText: {
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        marginTop: 10,
    }
})

export default Startscreen;