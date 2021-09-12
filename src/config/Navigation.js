import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Startscreen from '../Container/Startscreen';
import Signin from '../Container/Signin';
import Signup from '../Container/Signup';
import Homepage from '../Container/Homepage';
import DetailsScreen from '../Container/DetailsScreen';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Startscreen"
                    component={Startscreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Signin"
                    component={Signin}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Homepage"
                    component={Homepage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="DetailsScreen"
                    component={DetailsScreen}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;