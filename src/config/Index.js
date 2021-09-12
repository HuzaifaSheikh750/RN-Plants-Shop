import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './Navigation'
import Home from '../Container/Homepage'
import auth from '@react-native-firebase/auth';

export default AppContainer = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    return (
        <NavigationContainer>
            {user ? <Home/> : <Navigation />}
        </NavigationContainer>
    )
}