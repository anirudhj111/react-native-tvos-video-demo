import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import TvScreen from '../screens/TvScreen';

const AppStack = createStackNavigator()

const AppStackNavigator = () => {
    return(
        <AppStack.Navigator>
            <AppStack.Screen name='Home' component={Home} options={{headerShown:false}}/>
            <AppStack.Screen name='TvScreen' component={TvScreen}  options={{headerShown:false}}/>
        </AppStack.Navigator>
    )
}

const NavContainer = () => {
    return(
        <NavigationContainer>
            <AppStackNavigator/>
        </NavigationContainer>
    )
}

export default NavContainer;